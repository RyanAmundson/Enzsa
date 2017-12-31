import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActivityPage} from "../activity/activity";
import {RegisterPage} from "../register/register";
import { AuthService } from '../../services/auth-service';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string = "test@test.com";
  password:string = "testpass";

  constructor(private nav: NavController, private auth:AuthService) {
  }

  // login and go to home page
  login(email,password) {
    this.auth.login(email,password).then(value => {
      console.log('Nice, it worked!');
      this.nav.setRoot(ActivityPage);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }

  // go sign up page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }
}
