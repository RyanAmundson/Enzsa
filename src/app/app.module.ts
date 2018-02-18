import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import services
import {UserService} from '../services/user-service';
import {PostService} from '../services/post-service';
import {ChatService} from '../services/chat-service';
import {NotificationService} from '../services/notification-service';
import { AuthService } from '../services/auth-service';
// end import services

// import pages
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ActivityPage} from '../pages/activity/activity';
import {PostPage} from '../pages/post/post';
import {ChatsPage} from '../pages/chats/chats';
import {UserPage} from '../pages/user/user';
import {ChatDetailPage} from '../pages/chat-detail/chat-detail';
import {NewPostPage} from '../pages/new-post/new-post';
import {NotificationsPage} from '../pages/notifications/notifications';
import {ContactPage} from '../pages/contact/contact';
import {SettingsPage} from '../pages/settings/settings';
import { AboutPage } from "../pages/about/about";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
// end import pages

//import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BurstPage } from '../pages/burst/burst';
import { CryptoGuruService } from '../services/crypto-guru-service';

//end import firebase

export const firebaseConfig = {
  apiKey: "AIzaSyBxw57VoAypGa-daaWTeEAcUJzu6rProOU",
  authDomain: "project-5764675756154293597.firebaseapp.com",
  databaseURL: "https://project-5764675756154293597.firebaseio.com",
  projectId: "project-5764675756154293597",
  storageBucket: "project-5764675756154293597.appspot.com",
  messagingSenderId: "179876794417"
};


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ActivityPage,
    PostPage,
    ChatsPage,
    UserPage,
    ChatDetailPage,
    NewPostPage,
    NotificationsPage,
    ContactPage,
    SettingsPage,
    AboutPage,
    HomePage,
    TabsPage,
    BurstPage
    /* import pages */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ActivityPage,
    PostPage,
    ChatsPage,
    UserPage,
    ChatDetailPage,
    NewPostPage,
    NotificationsPage,
    ContactPage,
    SettingsPage,
    AboutPage,
    HomePage,
    TabsPage,
    BurstPage
    /* import pages */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    PostService,
    ChatService,
    NotificationService,
    AngularFireDatabase,
    AuthService,
    CryptoGuruService
    /* import services */
  ]
})
export class AppModule {
}
