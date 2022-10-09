from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    
    path("student/", StudentAPI.as_view()),


    # path('',home,name='home'),
    # path('student/',post_student),
    # path('update-student/<id>/',update_student),
    # path('delete-student/<id>/',delete_student),
    path('get-book/',get_book),
    path('register/',RegisterUser.as_view()),
    path('generic-student/',StudentGeneric.as_view()),
    path('generic-student/<id>',StudentGeneric1.as_view()),

]
