from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

STATUS_CHOICES = [
    ('Applied', 'Applied'),
    ('Rejected', 'Rejected'),
    ('Shortlisted', 'Shortlisted'),
    ('Accepted', 'Accepted'),
]
# Create your models here.

class JobCandidate(AbstractUser):
    email = models.EmailField("Email Address", unique=True)
    USERNAME_FIELD: 'email'

class JobApplication(models.Model):
    """Job Application"""
    job_profile = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    sop = models.CharField(max_length=250, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    cv = models.FileField(blank=True, null=True, upload_to='uploads/')
    applied_on = models.DateTimeField(auto_now_add=True)

    def __str__ (self):
        return self.job_profile.email
