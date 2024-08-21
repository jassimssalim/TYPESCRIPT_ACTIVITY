import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  handleAction(actionType: string) {
    if (actionType === 'add') {
      window.alert("add");
    } else if (actionType === 'deleteAll') {
      window.alert("del");
    }
  }
  
}
