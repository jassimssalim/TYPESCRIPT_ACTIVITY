import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    { id: 1, name: 'Book 2', authors: ['Author 1']},
    { id: 2, name: 'Book 1', authors: ['Author 2']},
    { id: 3, name: 'Book 3', authors: ['Author 3'] },

  ];

  getBooks() {
    return this.books;
  }
}
