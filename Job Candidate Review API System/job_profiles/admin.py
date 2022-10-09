from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from job_profiles import models
# Register your models here.

admin.site.register(models.JobCandidate, UserAdmin)
admin.site.register(models.JobApplication)
