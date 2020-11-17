import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import { timer } from 'rxjs/observable/timer';
import * as firebase from 'firebase';
import { AkunPage } from '../pages/akun/akun';
import { AngularFireAuth } from 'angularfire2/auth';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any=HomePage;

  pages: Array<{title: string, component: any}>;

  showSplash = true;
  

  constructor(private androidFullScreen: AndroidFullScreen, public af: AngularFireAuth,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    var that = this;
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
   
    // User is signed in.
        that.rootPage = HomePage;
        // ...
      } else {
        // User is signed out.
        // ...
        that.rootPage = LoginPage;
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Akun', component: AkunPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      timer(3000).subscribe(() => this.showSplash = false) 
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
