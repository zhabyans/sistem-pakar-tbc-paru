import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the InputSaranDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-input-saran-dokter',
  templateUrl: 'input-saran-dokter.html',
})
export class InputSaranDokterPage {
  inputForm;
	isi_saran:any;
  persentase:any;
  // MD:any;
	saran_dokter:AngularFireList<any>;
  editBerita: any;
  editKey: any;
  editStatus: boolean;

  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,fb:FormBuilder) {
    this.saran_dokter=this.afDB.list('saran_dokter');
    this.editBerita = navParams.get("item");
    this.editStatus=false;
    if(this.editBerita!=null){
      this.editStatus = true;
      this.editKey =this.editBerita.id_saran;
      this.isi_saran = this.editBerita.isi_saran;
      this.persentase = this.editBerita.persentase;
      // this.MD = this.editBerita.MD;
    }

    this.inputForm=new FormGroup({
      isi_saran:new FormControl(),
      persentase:new FormControl(),
      // MD:new FormControl()
    })
   
    this.inputForm = FormGroup;
  this.inputForm = fb.group 
  ({
    'isi_saran':[null, Validators.compose([Validators.required, Validators.minLength(6)])],
    'persentase':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|10|20|30|40|50|60|70|80|90|100|!1.|!0.|!0,)$')])],
    // 'MD':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|0[.]1|0[.]2|0[.]3|0[.]4|0[.]5|0[.]6|0[.]7|0[.]8|0[.]9|1|!1.|!0.|!0,)$')])]
  }) 
  }

  addBerita(){
    if(this.editStatus){
      console.log(this.editStatus+"Edit berita");
      this.saran_dokter.update(this.editKey,{
        isi_saran:this.isi_saran,
        persentase:this.persentase,
        // MD:this.MD
      }).then(msg=>{
        this.navCtrl.pop();
        console.log("Data berhasil diedit!");
        console.log(msg);
      }).catch(err=>{
        console.log("Data gagal diedit!");
        console.error(err);
      })
    }
    else{
      console.log("Add berita");
      var id_saranPush=this.saran_dokter.push({});
        id_saranPush.set({
        id_saran:id_saranPush.key,
        isi_saran:this.isi_saran,
        persentase:this.persentase,
        // MD:this.MD
      })
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputBeritaPage');
  }
}
