import {  Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  email: string;
  password: string;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {

    console.log('Auth: ', this.auth.user$);
  }

  login(){
    this.router.navigateByUrl('/');
  }

  doFacebookLogin(){
      
  }

}
