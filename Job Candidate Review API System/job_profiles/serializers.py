from rest_framework import serializers
from job_profiles import models

class JobCandidateSerializer (serializers.ModelSerializer):

    class Meta:
        model = models.JobCandidate
        fields = ('id', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {
            'password':{
                'write_only':True,
                'style':{'input_type':'password'}
            }
        }
    
    def create(self,validated_data):
        user = models.JobCandidate.objects.create_user(
            email = validated_data['email'],
            username = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password']
        )
        return user
    
    

        
class JobApplicationSerializer (serializers.ModelSerializer):

    class Meta:
        model = models.JobApplication
        fields = '__all__'
        extra_kwargs = {
            'job_profile':{
                'read_only':True,
            },
            'applied_on':{
                'read_only':True,
            }
        }

