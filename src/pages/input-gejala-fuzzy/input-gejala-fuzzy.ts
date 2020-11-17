import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the InputGejalaFuzzyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-input-gejala-fuzzy',
  templateUrl: 'input-gejala-fuzzy.html',
})
export class InputGejalaFuzzyPage {
  inputForm;
  id_gejala:any;
  batuk:any;
  usia:any;
  // suhu_tubuh:any;
  MB:any;
  MD:any;
	gejala_fz:AngularFireList<any>;
  editBerita: any;
  editKey: any;
  editStatus: boolean;
  adminMenu:boolean;

  constructor(public afDB: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,fb:FormBuilder) {
    this.gejala_fz=this.afDB.list('gejala_fz');
    this.editBerita = navParams.get("item");
    this.editStatus=false;
    this.adminMenu=false;
    console.log("edit berita: "+this.editBerita);
    if(this.editBerita!=null){
      this.editStatus = true;
      this.adminMenu=true;
      this.id_gejala =this.editBerita.id_gejala;
      this.batuk = this.editBerita.batuk;
      this.usia = this.editBerita.usia;
      // this.suhu_tubuh = this.editBerita.suhu_tubuh;
      this.MB = this.editBerita.MB;
      this.MD = this.editBerita.MD;
    }
    this.inputForm=new FormGroup({
      id_gejala:new FormControl(),
      batuk:new FormControl(),
      usia:new FormControl(),
      // suhu_tubuh:new FormControl(),
      MB:new FormControl(),
      MD:new FormControl()
    })
   
    this.inputForm = FormGroup;
  this.inputForm = fb.group 
  ({
    'id_gejala':[null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2)])],
    'batuk':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
    'usia':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
    // 'suhu_tubuh':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
    'MB':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|0[.]1|0[.]2|0[.]3|0[.]4|0[.]5|0[.]6|0[.]7|0[.]8|0[.]9|1|!1.|!0.|!0,)$')])],
    'MD':[null, Validators.compose([Validators.required,Validators.maxLength(3), Validators.pattern('^(?:0|0[.]1|0[.]2|0[.]3|0[.]4|0[.]5|0[.]6|0[.]7|0[.]8|0[.]9|1|!1.|!0.|!0,)$')])]
  }) 
  }

  addBerita(){
    if(this.editStatus){
      console.log(this.editStatus+"Edit berita");
      this.gejala_fz.update(this.id_gejala,{
        batuk:this.batuk,
        usia:this.usia,
        // suhu_tubuh:this.suhu_tubuh,
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
      const userList = this.afDB.list('gejala_fz');
      userList.set(this.id_gejala,
      {
        id_gejala:this.id_gejala,
        batuk:this.batuk,
        usia:this.usia,
        // suhu_tubuh:this.suhu_tubuh,
        MB:this.MB,
        MD:this.MD
      })
      this.navCtrl.pop();
      //UPLOAD DATA WITH GENERATED KEY
      // console.log("Add berita");
      // var id_gejalaPush=this.gejala_fz.push({});
      //   id_gejalaPush.set({
      //   id_gejala:id_gejalaPush.key,
      //   batuk:this.batuk,
      //   usia:this.usia,
      //   suhu_tubuh:this.suhu_tubuh,
      //   MB:this.MB,
      //   MD:this.MD
      // })
      // this.navCtrl.pop();
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputGejalaFuzzyPage');
  }

}
