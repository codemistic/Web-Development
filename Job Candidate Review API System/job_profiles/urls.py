from django.urls import path, include
from job_profiles import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('jobprofiles', views.JobCandidateViewSet)
router.register('applications', views.JobApplicationViewSet)

app_name = 'job_profiles'

urlpatterns = [
    path('login/',views.JobCandidateLoginApiView.as_view()),
    path('job_applications/',views.Job_Applications, name="Job_Applications"),
    path('apply/',views.apply, name="apply"),
    path('',include(router.urls), name="Job_Profile"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)