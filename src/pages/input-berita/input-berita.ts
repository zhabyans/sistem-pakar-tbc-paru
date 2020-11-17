import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
// import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the InputBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-input-berita',
  templateUrl: 'input-berita.html',
})
export class InputBeritaPage {
  inputForm;
	nama_gejala:any;
  MB:any;
  MD:any;
	gejala_cf:AngularFireList<any>;
  editBerita: any;
  editKey: any;
  editStatus: boolean;

  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,fb:FormBuilder) {
    this.gejala_cf=this.afDB.list('gejala_cf');
    this.editBerita = navParams.get("item");
    this.editStatus=false;
    if(this.editBerita!=null){
      this.editStatus = true;
      this.editKey =this.editBerita.id_gejala;
      this.nama_gejala = this.editBerita.nama_gejala;
      this.MB = this.editBerita.MB;
      this.MD = this.editBerita.MD;
    }

    this.inputForm=new FormGroup({
      nama_gejala:new FormControl(),
      MB:new FormControl(),
      MD:new FormControl()
    })
   
    this.inputForm = FormGroup;
  this.inputForm = fb.group 
  ({
    'nama_gejala':[null, Validators.compose([Validators.required, Validators.minLength(6)])],
    'MB':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|0[.]1|0[.]2|0[.]3|0[.]4|0[.]5|0[.]6|0[.]7|0[.]8|0[.]9|1|!1.|!0.|!0,)$')])],
    'MD':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|0[.]1|0[.]2|0[.]3|0[.]4|0[.]5|0[.]6|0[.]7|0[.]8|0[.]9|1|!1.|!0.|!0,)$')])]
  }) 
  }

  addBerita(){
    if(this.editStatus){
      console.log(this.editStatus+"Edit berita");
      this.gejala_cf.update(this.editKey,{
        nama_gejala:this.nama_gejala,
        MB:this.MB,
        MD:this.MD
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
      var id_gejalaPush=this.gejala_cf.push({});
        id_gejalaPush.set({
        id_gejala:id_gejalaPush.key,
        nama_gejala:this.nama_gejala,
        MB:this.MB,
        MD:this.MD
      })
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputBeritaPage');
  }

}
