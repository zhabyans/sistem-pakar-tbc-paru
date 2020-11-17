import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  domainForm;
	userEmail:string;
  userPassword:string;
  // loginForm: FormGroup;

  constructor(public navCtrl: NavController,public menu: MenuController, public navParams: NavParams, private auth:AuthProvider, fb:FormBuilder) {
  this.domainForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  // this.domainForm = FormGroup
  // this.domainForm =fb.group({
  //   'email':[null,Validators.compose([Validators.required,Validators.pattern(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/)])]
  // })
  this.menu.enable(false);
  this.domainForm = FormGroup;
  this.domainForm = fb.group 
  ({
    'email':[null, Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
    'password':[null, Validators.compose([Validators.required, Validators.minLength(6)])]
  }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

userLogin(){
	var data = ({email:this.userEmail,password:this.userPassword});
	this.auth.loginWithEmail(data).subscribe(data=>{
		console.log(data);
	})
}

checkLogin(){
  this.auth.checkLogin();
}

userLogout(){
  this.auth.logout();
}

// userRegister(){
//   console.log("ini tombol register");
//   this.navCtrl.push('RegisterPage');
// }

register(){
  var data =({email:this.userEmail,password:this.userPassword});
  this.auth.registerWithEmail(data);

}

whosNow(){
  console.log(this.auth.currentUser());
}

}
