from django.urls import path
from .views import RegisterView, VerifyOTPView, ResendOTPView,  LoginView
from . import social_views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("verify-otp/", VerifyOTPView.as_view(), name="verify-otp"),
    path("resend-otp/", ResendOTPView.as_view(), name="resend-otp"),
    path("login/", LoginView.as_view(), name="login"),
    path("google/", social_views.GoogleLogin.as_view(), name="google_login"),
    # path("linkedin/", social_views.LinkedInLogin.as_view(), name="linkedin_login"),
    # path("google/verify-token/", social_views.GoogleTokenVerificationView.as_view(), name="google_verify_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
    
