from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostModelAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc']