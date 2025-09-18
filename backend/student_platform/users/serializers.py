from rest_framework import serializers
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from datetime import timedelta
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

from .models import User, EmailOTP, VerifiedEmail


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ("email", "password", "role")

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            role=validated_data.get("role", "student"),
            
        )

        otp = EmailOTP.objects.create(
            user=user,
            code=EmailOTP.generate_code(),
            resend_available_at=timezone.now() + timedelta(seconds=60),
        )

        send_mail(
            subject="Your verification code",
            message=f"Your OTP is {otp.code}. It is valid for 10 minutes.",
            from_email=getattr(settings, "DEFAULT_FROM_EMAIL", "no-reply@isp.local"),
            recipient_list=[user.email],
            fail_silently=False,
        )
        return user
    
class VerifyOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    code = serializers.CharField(max_length=6)

    def validate(self, data):
        try:
            user = User.objects.get(email=data["email"])
            otp = EmailOTP.objects.filter(user=user, code=data["code"]).latest("created_at")
            verifiedEmail, created = VerifiedEmail.objects.get_or_create(user=user)
        except (User.DoesNotExist, EmailOTP.DoesNotExist):
            raise serializers.ValidationError("Invalid email or OTP")

        if not otp.is_valid():
            raise serializers.ValidationError("OTP has expired")
        else:
            verifiedEmail.is_verified = True
            verifiedEmail.save()
        return data


class ResendOTPSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email", read_only=True)
    resend_available_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = EmailOTP
        fields = ["email", "resend_available_at"]

    def create(self, validated_data):
        user = User.objects.get(email=self.initial_data["email"])
        otp = EmailOTP.objects.create(
            user=user,
            code=EmailOTP.generate_code(),
            resend_available_at=timezone.now() + timedelta(seconds=60),
        )

        send_mail(
            subject="Your new verification code",
            message=f"Your new OTP is {otp.code}. It is valid for 10 minutes.",
            from_email=getattr(settings, "DEFAULT_FROM_EMAIL", "no-reply@isp.local"),
            recipient_list=[user.email],
            fail_silently=False,
        )
        return otp


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        print("************")
        print(data)
        print("**********")
        user = authenticate(email=data["email"], password=data["password"])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        
        # check OTP verified (optional, if you want to enforce it)
        verified_email = VerifiedEmail.objects.filter(user=user).first()
        print(verified_email)
        if not verified_email or not verified_email.is_verified:
            raise serializers.ValidationError("Email not verified. Please verify OTP first.")

        refresh = RefreshToken.for_user(user)
        user_data = {
            'id': user.id,
            'email': user.email,
            'first_name': getattr(user, 'first_name', ''),
            'last_name': getattr(user, 'last_name', ''),
        }
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": user_data
        }