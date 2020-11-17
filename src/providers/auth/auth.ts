import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

  @Injectable()
  export class AuthProvider {

  	constructor(public af: AngularFireAuth, private toastCtrl: ToastController) {
  		console.log('Hello AuthProvider Provider');

  	}

  	loginWithEmail(credential){
  		return Observable.create(observer=>{
  			this.af.auth.signInWithEmailAndPassword(credential.email,credential.password)
  			.then ((authData)=>{
  				console.log(authData);
  				this.presentToast("Success login");
  				console.log("Success!, User is login");
  			})
  			.catch((error)=>{
  				console.log(error);
  				this.presentToast("Error login");
  				console.log("Error, Login is fail");	
  			})
  		})
  	}

    registerWithEmail(credential){
      this.af.auth.createUserWithEmailAndPassword(credential.email,credential.password)
      .then(authData=>{
				console.log("User "+authData.user.email+" berhasil dibuat");
				this.presentToast("Akun Berhasil Dibuat");
      })
      .catch(error=>{
        console.error(error.code);
        console.error(error.message);
				console.error("User gagal dibuat");
				this.presentToast("Akun Gagal Dibuat");
      })
    }

  	checkLogin(){
  		this.af.authState.subscribe(res=>{
  			if(res && res.uid){
  				this.presentToast("User is loggin");
  				console.log("res = "+res+"res.uid = "+res.uid);
  			}
  			else{
  				this.presentToast("User is not login");
  				console.log("User is not login");
  			}
  		})
  	}

  	logout(){
  		this.af.auth.signOut();
  		this.presentToast("User logout");
  		console.log("User sign out");
  	}

  	presentToast(msg) {
  		let toast = this.toastCtrl.create({
  			message: msg,
  			duration: 3000,
  			position: 'bottom'
  		});

  		toast.onDidDismiss(() => {
  			console.log('Dismissed toast');
  		});

  		toast.present();
  	}

    currentUser(){
      return this.af.auth.currentUser ?this.af.auth.currentUser.email:null;
    }
  }
