import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { EditComponent } from './edit/edit.component';
import { LibraryComponent } from './library/library.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'library',
    component: LibraryComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
