from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
import time
from .models import VMSession
from .guacamole_manager import GuacamoleManager
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def launch_vm(request):
    """API endpoint to launch VM"""
    try:
        session_id = f"session_{request.user.id}_{int(time.time())}"
        
        manager = GuacamoleManager()
        result = manager.launch_student_vm(session_id, request.user.id)
        
        # Save session to database
        vm_session = VMSession.objects.create(
            session_id=session_id,
            container_id=result['container_id'],
            connection_id=result['connection_id'],
            user=request.user,
            guacamole_url=result['guacamole_url'],
            status='active'
        )
        
        return Response({
            'success': True,
            'session_id': session_id,
            'guacamole_url': result['guacamole_url'],
            'container_id': result['container_id'],
            'container_ip': result['container_ip']
        })
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=500)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def stop_vm(request, session_id):
    """API endpoint to stop VM"""
    try:
        # Get session from database
        vm_session = VMSession.objects.get(
            session_id=session_id, 
            user=request.user
        )
        
        # Stop Docker container
        manager = GuacamoleManager()
        manager.stop_vm(vm_session.container_id)
        
        # Update session status
        vm_session.status = 'stopped'
        vm_session.save()
        
        return Response({'success': True})
        
    except VMSession.DoesNotExist:
        return Response({'success': False, 'error': 'Session not found'}, status=404)
    except Exception as e:
        return Response({'success': False, 'error': str(e)}, status=500)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_sessions(request):
    """Get user's active sessions"""
    sessions = VMSession.objects.filter(
        user=request.user, 
        status='active'
    ).values('session_id', 'created_at', 'guacamole_url')
    
    return Response({'sessions': list(sessions)})

# @api_view(['POST'])
# @permission_classes([AllowAny])
# @csrf_exempt
# def register_user(request):
#     """User registration endpoint"""
#     try:
#         username = request.data.get('username')
#         password = request.data.get('password')
#         email = request.data.get('email')
        
#         if not username or not password:
#             return Response({'error': 'Username and password are required'}, status=400)
        
#         if User.objects.filter(username=username).exists():
#             return Response({'error': 'Username already exists'}, status=400)
        
#         user = User.objects.create_user(
#             username=username,
#             password=password,
#             email=email or ''
#         )
        
#         # Generate tokens
#         refresh = RefreshToken.for_user(user)
        
#         return Response({
#             'success': True,
#             'message': 'User created successfully',
#             'tokens': {
#                 'access': str(refresh.access_token),
#                 'refresh': str(refresh)
#             },
#             'user': {
#                 'id': user.id,
#                 'username': user.username,
#                 'email': user.email
#             }
#         })
        
#     except Exception as e:
#         return Response({'error': str(e)}, status=500)

# @api_view(['POST'])
# @permission_classes([AllowAny])
# @csrf_exempt
# def login_user(request):
#     """User login endpoint"""
#     try:
#         username = request.data.get('username')
#         password = request.data.get('password')
        
#         if not username or not password:
#             return Response({'error': 'Username and password are required'}, status=400)
        
#         user = authenticate(username=username, password=password)
        
#         if user is not None:
#             refresh = RefreshToken.for_user(user)
            
#             return Response({
#                 'success': True,
#                 'message': 'Login successful',
#                 'tokens': {
#                     'access': str(refresh.access_token),
#                     'refresh': str(refresh)
#                 },
#                 'user': {
#                     'id': user.id,
#                     'username': user.username,
#                     'email': user.email
#                 }
#             })
#         else:
#             return Response({'error': 'Invalid credentials'}, status=401)
            
#     except Exception as e:
#         return Response({'error': str(e)}, status=500)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def logout_user(request):
#     """User logout endpoint"""
#     try:
#         # With JWT, we can't really "logout" server-side, but we can blacklist the token
#         # For simplicity, we'll just return success and let frontend delete the token
#         return Response({'success': True, 'message': 'Logout successful'})
#     except Exception as e:
#         return Response({'error': str(e)}, status=500)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_user_profile(request):
#     """Get current user profile"""
#     return Response({
#         'user': {
#             'id': request.user.id,
#             'username': request.user.username,
#             'email': request.user.email
#         }
#     })