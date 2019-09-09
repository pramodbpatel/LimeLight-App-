import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Post } from '../model/post';
import { Album } from '../model/album';
import { Photo } from '../model/photo';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userAPIURL:string = 'https://jsonplaceholder.typicode.com/users';
  postAPIURL:string = 'https://jsonplaceholder.typicode.com/posts';
  albumAPIURL:string = 'https://jsonplaceholder.typicode.com/albums';
  photoAPIURL:string = 'https://jsonplaceholder.typicode.com/photos';
  todoAPIURL:string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public login(user:User){
    localStorage.setItem('ACCESS_TOKEN', "access_Token");
    localStorage.setItem('ID', user.id.toString());
    localStorage.setItem('name', user.name);
    localStorage.setItem('website', user.website);
    localStorage.setItem('company', user.company.name);
  }

  getAll(): Observable<User[]>{
    return this.http.get<User []>(this.userAPIURL);
  }

  getPosts(): Observable<Post []> {
    return this.http.get<Post []>(this.postAPIURL);
  }

  getAlbums(): Observable<Album []> {
    return this.http.get<Album []>(this.albumAPIURL);
  }

  getPhotos(): Observable<Photo []> {
    return this.http.get<Photo []>(this.photoAPIURL);
  }

  getTodos(): Observable<Todo []> {
    return this.http.get<Todo []>(this.todoAPIURL);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ID');
    localStorage.removeItem('name');
    localStorage.removeItem('website');
    localStorage.removeItem('company');
  }
}
