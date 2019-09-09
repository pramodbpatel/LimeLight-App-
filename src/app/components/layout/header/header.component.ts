import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string;
  website:string;
  company:string;

  constructor(private authService:AuthService, private router:Router) { }


  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.website = `http://www.${localStorage.getItem('website')}`;
    this.company = localStorage.getItem('company');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
