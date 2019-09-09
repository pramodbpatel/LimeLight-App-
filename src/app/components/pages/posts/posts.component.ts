import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Post } from '../../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {  
  searchText:string;
  posts: Post[];

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('ACCESS_TOKEN') === null)
    this.router.navigateByUrl('/login');
    this.authService.getPosts().subscribe(posts => {
      this.posts = posts.filter(p => p.userId ===  parseInt(localStorage.getItem('ID')));
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
