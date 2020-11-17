import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	userEmail: string;
	userPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
  	var data =({email:this.userEmail,password:this.userPassword});
  	this.auth.registerWithEmail(data);
  }

}
