import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
// import { InputBeritaPage } from '../input-berita/input-berita';
import { InputSaranDokterPage } from '../input-saran-dokter/input-saran-dokter';

/**
 * Generated class for the SaranDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-saran-dokter',
  templateUrl: 'saran-dokter.html',
})
export class SaranDokterPage {

  user:any;
  adminMenu=false;
  saran_dokterRef:AngularFireList<any>;
  saran_dokter:Observable<any[]>;
  constructor(public afDb:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider) {
    this.saran_dokter=this.afDb.list("saran_dokter").valueChanges();
    this.saran_dokterRef=this.afDb.list("saran_dokter");
    this.user=this.auth.currentUser();
    if(this.user=="admin@sistempakar.com"){
      this.adminMenu=true;
    }
  }


  bukaInput(data){
  	this.navCtrl.push(InputSaranDokterPage, {
      item: data
    });
  }

  editBerita(data){
    this.navCtrl.push(InputSaranDokterPage,{
      item:data
    });
  }

  removeBerita(id_saran){
    this.saran_dokterRef.remove(id_saran)
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
