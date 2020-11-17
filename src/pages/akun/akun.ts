import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AkunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-akun',
  templateUrl: 'akun.html',
  
})
export class AkunPage {
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider) {
    this.user=this.auth.currentUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AkunPage');
  }

  userLogout(){
    this.auth.logout();
  }

  whosNow(){
    console.log(this.auth.currentUser());
  }

}
