from django import forms
from .models import Book


class BookForm(forms.ModelForm):
    """Form to add or edit books"""
    
    class Meta:
        model = Book
        fields = ['title', 'author', 'published_date', 'isbn', 'available_copies']
