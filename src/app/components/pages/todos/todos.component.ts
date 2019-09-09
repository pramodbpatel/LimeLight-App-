import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Todo } from '../../../model/todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('ACCESS_TOKEN') === null)
      this.router.navigateByUrl('/login');
    this.authService.getTodos().subscribe(todos => {
      this.todos = todos.filter(t => t.userId === parseInt(localStorage.getItem('ID')));
    });
  }

}
