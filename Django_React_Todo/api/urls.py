from django.urls import path
from . import views

urlpatterns = [
    path('', views.front, name='front'),
    path('task-list/', views.taskList, name='taskList'),
    path('task-detail/<str:pk>/',views.taskDetail, name='taskDetail'),
    path('task-create/', views.taskCreate, name='taskCreate'),
    path('task-update/<str:pk>/', views.taskUpdate, name='taskUpdate'),
    path('task-delete/<str:pk>/', views.taskDelete, name='taskDelete'),
] 