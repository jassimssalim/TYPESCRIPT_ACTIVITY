import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { ProfileComponent } from './user/pages/profile/profile.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';



//components 

import { FormComponent } from './user/components/form/form.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookItemComponent } from  './book/components/book-item/book-item.component';



const routes: Routes = [
  { path: 'profile', component: ProfileComponent },

  { path: 'form', component: FormComponent },
  { path: 'blog-item', component: BlogItemComponent },
  { path: 'book-item', component: BookItemComponent },
  

  { path: 'books', component: BookListComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/profile' } // Wildcard route for 404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
