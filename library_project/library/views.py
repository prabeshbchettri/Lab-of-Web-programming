from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import Book, Borrow
from .forms import BookForm



@login_required
def home(request):
    books = Book.objects.all()
    return render(request, 'home.html', {'books': books})



@login_required
def add_book(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = BookForm()
    
    return render(request, 'add_book.html', {'form': form})


@login_required
def borrow_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    
    # Check if book has copies available
    if book.available:
        # Create borrow record
        Borrow.objects.create(user=request.user, book=book)
        # Decrease available copies
        book.available_copies -= 1
        book.save()
    
    return redirect('home')



@login_required
def return_book(request, book_id):
  
    borrow = Borrow.objects.filter(
        user=request.user, 
        book_id=book_id, 
        return_date__isnull=True
    ).order_by('-borrowed_date').first()
    
    if not borrow:
        return redirect('my_borrows')
    
    
    borrow.return_date = timezone.now().date()
    borrow.save()


    book = Book.objects.get(id=book_id)
    book.available_copies += 1
    book.save()

    return redirect('my_borrows')



@login_required
def my_borrows(request):
    borrowed_books = Borrow.objects.filter(user=request.user).select_related('book').order_by('-borrowed_date')
    return render(request, 'my_borrows.html', {'borrowed_books': borrowed_books})
