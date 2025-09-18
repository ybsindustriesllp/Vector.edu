from django.db import models
from users.models import User

class VMSession(models.Model):
    SESSION_STATUS = [
        ('active', 'Active'),
        ('stopped', 'Stopped'),
        ('error', 'Error'),
    ]

    session_id = models.CharField(max_length=100, unique=True)
    container_id = models.CharField(max_length=100)
    connection_id = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=SESSION_STATUS, default='active')
    guacamole_url = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.session_id} - {self.user.username}"