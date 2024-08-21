import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  handleAction(actionType: string) {
    if (actionType === 'add') {
      window.alert("add");
    } else if (actionType === 'deleteAll') {
      window.alert("del");
    }
  }
}
