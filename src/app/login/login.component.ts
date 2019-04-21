import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/_services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isUser: boolean= false;
  user: User;

  constructor(private router: Router, public auth: AuthService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user!=null){
      this.isUser = true;
    }
   }

  
  ngOnInit() {
  }

}
