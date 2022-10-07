import uuid
from django.db import models
from django.urls import reverse

# Create your models here.


class Genre(models.Model):
    name = models.CharField(  max_length=200, help_text='Enter a book genre (e.g. Science Fiction)')

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200, null=False)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    summary = models.TextField( max_length=1000, help_text='Enter a brief description of the book')
    isbn = models.CharField('ISBN', max_length=13, unique=True, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')
    genre = models.ManyToManyField( Genre, help_text='Select a genre for this book')

    class Meta:
        ordering = ['title', 'author']

    def __str__(self):
        return self.title

    def display_id(self):
        return self.id

    def get_absolute_url(self):
        return reverse("book_detail", args=[str(self.id)])

    def display_genre(self):
        return ', '.join(genre.name for genre in self.genre.all()[:3])

    display_genre.short_description = 'Genre'


class BookInstance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book across whole library')
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('Maintenance', 'Maintenance'),
        ('Loan', 'On loan'),
        ('Available', 'Available'),
        ('Reserved', 'Reserved'),
    )

    status = models.CharField(max_length=20, choices=LOAN_STATUS, blank=True, default='Maintenance', help_text='Book availability',)

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        return f'{self.id} ({self.book.title})'


class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
