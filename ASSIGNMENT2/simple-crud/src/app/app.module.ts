import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { FormComponent } from './user/components/form/form.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    BookListComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
