from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book, Author, BookInstance, Genre
from .serializers import BookSerializer, AuthorSerializer, BookInstanceSerializer, GenreSerializer
from django.shortcuts import render

def front(request):
    context = { }
    return render(request, "index.html", context)

@api_view(['GET'])
def index(request):

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()

    num_instances = BookInstance.objects.all().count()
    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(
        status__exact='Available').count()

    # # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    # Numbwe of visits to this view
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Render the HTML template index.html with the data in the context variable
    return Response(context)


@api_view(['GET'])
def BookListView(request):
    books_list = Book.objects.all()
    serializer = BookSerializer(books_list, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def AuthorListView(request):
    author_list = Author.objects.all()
    serializer = AuthorSerializer(author_list, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def BookDetailView(request, pk):
    book_detail = Book.objects.get(id=pk)
    serializer = BookSerializer(book_detail, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def BookSpecificView(request, author_id):
    author_books = Book.objects.filter(author = author_id)
    serializer = BookSerializer(author_books, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def AuthorDetailView(request, pk):
    author_detail = Author.objects.get(id=pk)
    serializer = AuthorSerializer(author_detail, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def BookInstances(request):
    book_instances = BookInstance.objects.all()
    serializer = BookInstanceSerializer(book_instances, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def BookInstanceSpecific(request, book_id):
    books_instance = BookInstance.objects.filter(book = book_id)
    serializer = BookInstanceSerializer(books_instance, many=True)
    return Response(serializer.data)

from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 4
class ApiBooksListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    pagination_class = StandardResultsSetPagination