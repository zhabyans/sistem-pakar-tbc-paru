import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { InputGejalaFuzzyPage } from '../input-gejala-fuzzy/input-gejala-fuzzy';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
// import firebase from 'firebase';

/**
 * Generated class for the DaftarGejalaFuzzyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-daftar-gejala-fuzzy',
  templateUrl: 'daftar-gejala-fuzzy.html',
})
export class DaftarGejalaFuzzyPage {
  user:any;
  gejala_fzRef:AngularFireList<any>;
  gejala_fz:Observable<any[]>;
  adminMenu=false;
  constructor(public afDb:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider) {
    this.gejala_fz=this.afDb.list("gejala_fz").valueChanges();
    this.gejala_fzRef=this.afDb.list("gejala_fz");
    this.user=this.auth.currentUser();
    console.log(this.user);
    if(this.user=="admin@sistempakar.com"){
      this.adminMenu=true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarGejalaFuzzyPage');
  }

  bukaInput(event, data){
  	this.navCtrl.push(InputGejalaFuzzyPage, {
      item: data
    });
  }

  editBerita(event,data){
    this.navCtrl.push(InputGejalaFuzzyPage,{
      item:data
    });
  }

  removeBerita(id_gejala){
    this.gejala_fzRef.remove(id_gejala)
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
