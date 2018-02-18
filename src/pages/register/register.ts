import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActivityPage} from "../activity/activity";
import { AuthService } from '../../services/auth-service';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string;
  password:string;

  constructor(private nav: NavController, private auth: AuthService) {
  }

  // sign up and go to home page
  signUp(email,password) {
    this.auth.signup(email,password).then(value => {
      console.log('Success!', value);
      this.nav.setRoot(ActivityPage);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });  
  }
}
