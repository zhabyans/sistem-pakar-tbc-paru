import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
// import { InputBeritaPage } from '../input-berita/input-berita';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DiagnosisPage } from '../diagnosis/diagnosis';
import { DaftarGejalaPage } from '../daftar-gejala/daftar-gejala';
import { DaftarGejalaFuzzyPage } from '../daftar-gejala-fuzzy/daftar-gejala-fuzzy';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { SaranDokterPage } from '../saran-dokter/saran-dokter';
import { AuthProvider } from '../../providers/auth/auth';
//import { ListPage } from '../list/list';
// import { AndroidFullScreen } from '@ionic-native/android-full-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  tes =true;
  // berita:Observable<any[]>;
  // beritaRef:AngularFireList<any>;
  gejala_cfRef:AngularFireList<any>;
  gejala_cf:Observable<any[]>;
  user:any;
  adminMenu=false;

 
  constructor(public navCtrl: NavController,public menu: MenuController,public afDb:AngularFireDatabase,private auth:AuthProvider) {
    this.user=this.auth.currentUser();
    // this.androidFullScreen.isImmersiveModeSupported()
    // .then(() => console.log('Immersive mode supported'))
    // .catch(err => console.log(err));
    this.menu.enable(true);
    if(this.user=="admin@sistempakar.com"){
      this.adminMenu=true;
    }else{
      this.adminMenu=false;
    }
    console.log("adminMuncul = "+this.user);
    this.afDb.database.ref('saran_dokter/-LVcBY00SSC7P6cHajfJ/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVcBd4DPl24tvYAtUYs/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhprrhP9TvfSNU6Zy8/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhptJKe5kUZGcblyHT/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhpvD-CTSN4EnW1iUK/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhpywXbvXR6cs_dBwq/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhq-UWVeR4ZQNFD3RY/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhq1MQ8XWUAFTXP9pP/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhq2xy1oGqh4b6QRTG/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    this.afDb.database.ref('saran_dokter/-LVhq4vikMKXBzybC24K/').on('value', res => {
      console.log(res.val().isi_saran,res.val().persentase)
     });
    // this.gejala_cf=this.afDb.list("gejala_cf").valueChanges();
    // this.gejala_cfRef=this.afDb.list("gejala_cf");
     this.afDb.database.ref('gejala_cf/-LUXk0Ex30nrg6Z0o0cu/').on('value', res => {
      console.log(res.val().MB,res.val().MD)
     });
     this.afDb.database.ref('gejala_cf/-LUXk302wNOrqZEcSeDT/').on('value', res => {
      console.log(res.val().MB,res.val().MD)
     });
     this.afDb.database.ref('gejala_cf/-LUXk845ewLvYEUJkhK_/').on('value', res => {
      console.log(res.val().MB,res.val().MD)
     });
     this.afDb.database.ref('gejala_cf/-LUXkCSzNjsQVczLi0Ek/').on('value', res => {
      console.log(res.val().MB,res.val().MD)
     });
     this.afDb.database.ref('gejala_cf/-LUXkFQpedpzTTYk8V2S/').on('value', res => {
      console.log(res.val().MB,res.val().MD)
     });
     this.afDb.database.ref('gejala_fz/AM').on('value', res => {
      console.log(res.val().MB,res.val().MD)
    });
     this.afDb.database.ref('gejala_fz/KM').on('value', res => {
      console.log(res.val().MB,res.val().MD)
    });
     this.afDb.database.ref('gejala_fz/AT').on('value', res => {
      console.log(res.val().MB,res.val().MD)
    });
     this.afDb.database.ref('gejala_fz/KT').on('value', res => {
      console.log(res.val().MB,res.val().MD)
    });
    

    // this.berita=this.afDb.list("berita").valueChanges();
    // this.beritaRef=this.afDb.list("berita");
  }

  // editBerita(event,data){
  //   this.navCtrl.push(InputBeritaPage,{
  //     item:data
  //   });
  // }

  // removeBerita(id){
  //   this.beritaRef.remove(id)
  //   .then(msg=>{
  //     console.log(msg);
  //     console.log("Berita berhasil dihapus!");
  //   })
  //   .catch(err=>{
  //     console.error(err);
  //     console.log("Berita gagal dihapus!");
  //   })
  // }

  bukaDiagnosis(){
    this.navCtrl.push(DiagnosisPage);
  }
  bukaGejalaCf(){
    this.navCtrl.push(DaftarGejalaPage);
  }
  bukaGejalaFz(){
    this.navCtrl.push(DaftarGejalaFuzzyPage);
  }
  saranDokter(){
    this.navCtrl.push(SaranDokterPage);
  }

  // bukaInput(event, data){
  // 	this.navCtrl.push(InputBeritaPage, {
  //     item: data
  //   });
  // }

}
