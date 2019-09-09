import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted:boolean = false;
  users: User[];
  user: User;

  constructor(private authService: AuthService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.authService.getAll().subscribe(users => {
      this.users = users;
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    })
  }

  get formControls(){
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    this.authService.getAll().subscribe(u => {
      this.user = u.filter(u=> u.email.toLowerCase() === this.loginForm.value.email.toLowerCase())[0];
    });
    if(this.user != null){
      this.authService.login(this.user);
      console.log("Login");
    }
    if(this.loginForm.invalid){
      console.log("Not Login");
      return;
    }
    this.router.navigateByUrl('/posts');
  }
}
