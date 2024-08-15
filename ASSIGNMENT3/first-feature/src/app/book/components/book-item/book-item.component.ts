import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: { id: number, name: string, authors: string[] } = { id: 0, name: '', authors: [] };
  @Output() editEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  delete() {
    this.deleteEvent.emit(this.book.id);
  }

  edit() {
    this.editEvent.emit(this.book.id);
  }
}
