import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService}  from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myService: AuthService){}

  formInfo: any = {username: "", password: ""};

  user: any;

  error: any;

  title = 'app';


  login() {
    this.myService.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  signup() {
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => {this.user = user
          console.log(this.user);
        },
        (err) => this.error = err
      );
  }


  logout(){
    this.myService.logout()
    .subscribe(
    () => {this.user = null
      this.formInfo = {};
    },
    (err) => this.error = err
  );
  }


}
