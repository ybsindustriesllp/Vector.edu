from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # # Authentication endpoints
    # path('api/register/', views.register_user, name='register'),
    # path('api/login/', views.login_user, name='login'),
    # path('api/logout/', views.logout_user, name='logout'),
    # path('api/profile/', views.get_user_profile, name='profile'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # VM management endpoints
    path('launch-vm/', views.launch_vm, name='launch-vm'),
    path('stop-vm/<str:session_id>/', views.stop_vm, name='stop-vm'),
    path('sessions/', views.list_sessions, name='list-sessions'),
]