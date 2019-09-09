import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PostsComponent } from './components/pages/posts/posts.component';
import { AlbumsComponent } from './components/pages/albums/albums.component';
import { TodosComponent } from './components/pages/todos/todos.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent },  
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard] },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
