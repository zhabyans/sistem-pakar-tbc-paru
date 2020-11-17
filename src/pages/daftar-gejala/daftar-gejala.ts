import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { InputBeritaPage } from '../input-berita/input-berita';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-daftar-gejala',
  templateUrl: 'daftar-gejala.html',
})
export class DaftarGejalaPage {
  
  user:any;
  adminMenu=false;
  gejala_cfRef:AngularFireList<any>;
  gejala_cf:Observable<any[]>;
  constructor(public afDb:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider) {
    this.gejala_cf=this.afDb.list("gejala_cf").valueChanges();
    this.gejala_cfRef=this.afDb.list("gejala_cf");
    this.user=this.auth.currentUser();
    if(this.user=="admin@sistempakar.com"){
      this.adminMenu=true;
    }
  }


  bukaInput(data){
  	this.navCtrl.push(InputBeritaPage, {
      item: data
    });
  }

  editBerita(data){
    this.navCtrl.push(InputBeritaPage,{
      item:data
    });
  }

  removeBerita(id_gejala){
    this.gejala_cfRef.remove(id_gejala)
    .then(msg=>{
      console.log(msg);
      console.log("Berita berhasil dihapus!");
    })
    .catch(err=>{
      console.error(err);
      console.log("Berita gagal dihapus!");
    })
  }

}
