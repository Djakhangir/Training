import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // after installation npm install @angular/animations@latest --save; import it here  and save as dependency;

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LibraryComponent } from './library/library.component';
import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    EditComponent,
    UsersComponent,
    PostsComponent,
    SidebarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule //imoprt it here too;
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
