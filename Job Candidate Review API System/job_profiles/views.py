from django.shortcuts import render
from django.http import HttpResponse
from job_profiles import serializers
from job_profiles.models import JobApplication, JobCandidate
from job_profiles import permissions

from rest_framework import viewsets, filters
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer

# Create your views here.
def Test(request):
    return HttpResponse("Something SOment")

class JobCandidateViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.JobCandidateSerializer
    queryset = JobCandidate.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('first_name', 'last_name', 'email')

class JobCandidateLoginApiView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class JobApplicationViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.JobApplicationSerializer
    queryset = JobApplication.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (
        permissions.UpdateOwnApplication,
        IsAuthenticatedOrReadOnly,

    )

    def perform_create(self, serializer):
        serializer.save(job_profile=self.request.user)


def Job_Applications (request):
    return render(
        request,
        'index.html'
    )

def apply(request):
    return render(request, 'form.html')
