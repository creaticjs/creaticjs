import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autService: AuthenticationService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.autService.loginFacebook().then((data) => {
      console.log(data);
    }).catch((error) =>{
      console.log(error);
    } );
  }

  loginGoogle() {
    this.autService.loginGoogle().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    } );
  }
}
