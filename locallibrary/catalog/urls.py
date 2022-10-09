from django.urls import path
from . import views

urlpatterns = [
    path('', views.front, name='front'),
    path('detail/', views.index, name='index'),
    path('books/', views.BookListView, name='BookListView'),
    path('book/<str:pk>/', views.BookDetailView, name='BookDetailView'),
    path('authors/', views.AuthorListView, name='AuthorListView'),
    path('author/<str:pk>/', views.AuthorDetailView, name='AuthorDetailView'),
    path('author/books/<str:author_id>/', views.BookSpecificView, name='BookSpecificView'),
    path('instance/', views.BookInstances, name='Instance'),
    path('book/instance/<str:book_id>/', views.BookInstanceSpecific, name='BookInstanceSpecific'),
    path('ApiBooksListView/', views.ApiBooksListView.as_view(), name='EventNewsItems'),
]
