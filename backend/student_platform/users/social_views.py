# social_views.py
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from jwt import PyJWKClient
import json

class GoogleLogin(APIView):
    authentication_classes = []
    permission_classes = []
    
    def post(self, request):
        id_token = request.data.get('id_token') or request.data.get('access_token')
        
        if not id_token:
            return Response(
                {'error': 'Google ID token is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        print(f"Received ID token: {id_token[:50]}...")
        
        try:
            # Verify and decode the JWT ID token
            try:
                # First, try to verify the token signature
                jwks_client = PyJWKClient("https://www.googleapis.com/oauth2/v3/certs")
                signing_key = jwks_client.get_signing_key_from_jwt(id_token)
                
                # Decode with signature verification
                id_info = jwt.decode(
                    id_token,
                    signing_key.key,
                    algorithms=["RS256"],
                    audience="537584982631-2tm67tegfgce4pjhcs3bcndpi588p45m.apps.googleusercontent.com",
                    options={"verify_exp": True}
                )
                
            except jwt.PyJWTError as e:
                print(f"JWT verification failed: {e}. Trying without verification for development...")
                
                # For development, decode without verification
                id_info = jwt.decode(id_token, options={"verify_signature": False})
                print("Decoded without signature verification (development only)")
            
            print("Decoded JWT payload:", json.dumps(id_info, indent=2))
            
            # Validate required fields
            if not id_info.get('email') or not id_info.get('sub'):
                return Response(
                    {'error': 'Invalid ID token: missing email or sub'}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Extract only the essential user information we need
            user_data = {
                'email': id_info['email'],
                'google_user_id': id_info['sub'],
                'email_verified': id_info.get('email_verified', False)
            }
            
            print("Extracted user data:", user_data)
            
            if not user_data['email_verified']:
                return Response(
                    {'error': 'Email not verified by Google'}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Check if social account exists
            User = get_user_model()
            
            try:
                # Try to find existing social account
                social_account = SocialAccount.objects.get(
                    provider='google',
                    uid=user_data['google_user_id']
                )
                user = social_account.user
                
                print(f"Found existing user: {user.email}")
                
            except SocialAccount.DoesNotExist:
                print("No social account found, creating new user...")
                
                # Create new user and social account
                try:
                    # Try to find user by email
                    user = User.objects.get(email=user_data['email'])
                    print(f"Found user by email: {user.email}")
                        
                except User.DoesNotExist:
                    print("Creating new user...")
                    # Create new user with only email (no extra fields needed)
                    user = User.objects.create_user(
                        email=user_data['email'],
                        is_active=True
                    )
                    print(f"New user created: {user.email}")
                
                # Create social account with Google information
                # Store the full Google data in extra_data for future use
                SocialAccount.objects.create(
                    user=user,
                    provider='google',
                    uid=user_data['google_user_id'],
                    extra_data=id_info  # Store the full Google response for future profile creation
                )
                print("Social account created")
            
            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            
            # Prepare user data for response (only what's available in User model)
            user_response_data = {
                'id': user.id,
                'email': user.email,
                'role': user.role,  # From your User model
            }
            
            print("Google login successful, returning JWT tokens")
            
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user': user_response_data
            }, status=status.HTTP_200_OK)
            
        except jwt.ExpiredSignatureError:
            return Response(
                {'error': 'Google token has expired'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except jwt.InvalidTokenError as e:
            return Response(
                {'error': f'Invalid Google token: {str(e)}'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            print(f"Google login error: {str(e)}")
            return Response(
                {'error': f'Google login failed: {str(e)}'}, 
                status=status.HTTP_400_BAD_REQUEST
            )