import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: { id: number, name: string, authors: string[] }[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  // Handle the edit event
  edit(id: number) {
    console.log(`Edit book with ID: ${id}`);
    const bookToEdit = this.books.find(book => book.id === id);
    if (bookToEdit) {
      alert(`Editing book: ${bookToEdit.name}`);
    }
  }

  delete(id: number) {
    console.log(`Delete book with ID: ${id}`);
    this.books = this.books.filter(book => book.id !== id);
  }
}
