import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HasilPersentaseDiagnosisPage } from '../hasil-persentase-diagnosis/hasil-persentase-diagnosis';

/**
 * Generated class for the HasilDiagnosisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hasil-diagnosis',
  templateUrl: 'hasil-diagnosis.html',
})
export class HasilDiagnosisPage {
  subUsia: string;
  subLamaBatuk: string;
  rule: any;
  cfAkut: number;
  cfKronis: number;
  cfMuda: number;
  cfTua: number;
  HASIL:number;

  mbRule1: number;
  mdRule1: number;

  mb1Rule2: number;
  md1Rule2: number;
  mb2Rule2: number;
  md2Rule2: number;

  mb1Rule4: number;
  md1Rule4: number;
  mb2Rule4: number;
  md2Rule4: number;
  mb3Rule4: number;
  md3Rule4: number;
  mb4Rule4: number;
  md4Rule4: number;

  MB1: number;
  MD1: number;
  MB2: number;
  MD2: number;
  MB3: number;
  MD3: number;
  MB4: number;
  MD4: number;
  MB5: number;
  MD5: number;
  MB6: number;
  MD6: number;
  MB7: number;
  MD7: number;
  MB8: number;
  MD8: number;
  MB9: number;
  MD9: number;
  MB10: number;
  MD10: number;
  MB11: number;
  MD11: number;
  MB12: number;
  MD12: number;
  MB13: number;
  MD13: number;

  inputForm: any;
  MBG1: number;
  MDG1: number;
  MBG2: number;
  MDG2: number;
  MBG3: number;
  MDG3: number;
  MBG4: number;
  MDG4: number;
  MBG5: number;
  MDG5: number;
  z1: number;

  SD1P: number;
  SD2P: number;
  SD3P: number;
  SD4P: number;
  SD5P: number;
  SD6P: number;
  SD7P: number;
  SD8P: number;
  SD9P: number;
  SD10P: number;

  SD1I: string;
  SD2I: string;
  SD3I: string;
  SD4I: string;
  SD5I: string;
  SD6I: string;
  SD7I: string;
  SD8I: string;
  SD9I: string;
  SD10I: string;

  constructor(public alertCtrl: AlertController, fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public afDb: AngularFireDatabase) {
    this.subUsia = navParams.get('subUsia');
    this.subLamaBatuk = navParams.get('subLamaBatuk');
    this.rule = navParams.get("rule");
    this.cfAkut = navParams.get("cfAkut");
    this.cfKronis = navParams.get("cfKronis");
    this.cfMuda = navParams.get("cfMuda");
    this.cfTua = navParams.get("cfTua");
    this.mbRule1 = navParams.get("mbRule1");
    this.mb1Rule2 = navParams.get("mb1Rule2");
    this.mb2Rule2 = navParams.get("mb2Rule2");
    this.mb1Rule4 = navParams.get("mb1Rule4");
    this.mb2Rule4 = navParams.get("mb2Rule4");
    this.mb3Rule4 = navParams.get("mb3Rule4");
    this.mb4Rule4 = navParams.get("mb4Rule4");
    this.mdRule1 = navParams.get("mdRule1");
    this.md1Rule2 = navParams.get("md1Rule2");
    this.md2Rule2 = navParams.get("md2Rule2");
    this.md1Rule4 = navParams.get("md1Rule4");
    this.md2Rule4 = navParams.get("md2Rule4");
    this.md3Rule4 = navParams.get("md3Rule4");
    this.md4Rule4 = navParams.get("md4Rule4");
    this.HASIL=null;

    this.afDb.database.ref('saran_dokter/-LVcBY00SSC7P6cHajfJ/').on('value', res => {
      this.SD1I = res.val().isi_saran;
      this.SD1P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVcBd4DPl24tvYAtUYs/').on('value', res => {
      this.SD2I = res.val().isi_saran;
      this.SD2P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhprrhP9TvfSNU6Zy8/').on('value', res => {
      this.SD3I = res.val().isi_saran;
      this.SD3P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhptJKe5kUZGcblyHT/').on('value', res => {
      this.SD4I = res.val().isi_saran;
      this.SD4P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhpvD-CTSN4EnW1iUK/').on('value', res => {
      this.SD5I = res.val().isi_saran;
      this.SD5P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhpywXbvXR6cs_dBwq/').on('value', res => {
      this.SD6I = res.val().isi_saran;
      this.SD6P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhq-UWVeR4ZQNFD3RY/').on('value', res => {
      this.SD7I = res.val().isi_saran;
      this.SD7P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhq1MQ8XWUAFTXP9pP/').on('value', res => {
      this.SD8I = res.val().isi_saran;
      this.SD8P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhq2xy1oGqh4b6QRTG/').on('value', res => {
      this.SD9I = res.val().isi_saran;
      this.SD9P = res.val().persentase;
    });
    this.afDb.database.ref('saran_dokter/-LVhq4vikMKXBzybC24K/').on('value', res => {
      this.SD10I = res.val().isi_saran;
      this.SD10P = res.val().persentase;
    });

    this.inputForm = new FormGroup({
      1: new FormControl(),
      2: new FormControl(),
      3: new FormControl(),
      4: new FormControl(),
      5: new FormControl(),
    })

    this.inputForm = FormGroup;
    this.inputForm = fb.group
      ({
        '1': [null, Validators.compose([Validators.required,])],
        '2': [null, Validators.compose([Validators.required,])],
        '3': [null, Validators.compose([Validators.required,])],
        '4': [null, Validators.compose([Validators.required,])],
        '5': [null, Validators.compose([Validators.required,])],
      })


    this.afDb.database.ref('gejala_cf/-LUXk0Ex30nrg6Z0o0cu/').on('value', res => {
      this.MB1 = parseFloat(res.val().MB);
      this.MD1 = parseFloat(res.val().MD);
    });
    this.afDb.database.ref('gejala_cf/-LUXk302wNOrqZEcSeDT/').on('value', res => {
      this.MB2 = parseFloat(res.val().MB);
      this.MD2 = parseFloat(res.val().MD);
    });
    this.afDb.database.ref('gejala_cf/-LUXk845ewLvYEUJkhK_/').on('value', res => {
      this.MB3 = parseFloat(res.val().MB);
      this.MD3 = parseFloat(res.val().MD);
    });
    this.afDb.database.ref('gejala_cf/-LUXkCSzNjsQVczLi0Ek/').on('value', res => {
      this.MB4 = parseFloat(res.val().MB);
      this.MD4 = parseFloat(res.val().MD);
    });
    this.afDb.database.ref('gejala_cf/-LUXkFQpedpzTTYk8V2S/').on('value', res => {
      this.MB5 = parseFloat(res.val().MB);
      this.MD5 = parseFloat(res.val().MD);
    });


    this.MBG1 = this.MB1 + (this.MB2 * (1 - this.MB1));
    console.log("MBG1 = "+this.MBG1);
    this.MBG2 = this.MB3 + (this.MBG1 * (1 - this.MB3));
    console.log("MBG2 = "+this.MBG2);
    this.MBG3 = this.MB4 + (this.MBG2 * (1 - this.MB4));
    console.log("MBG3 = "+this.MBG3);
    this.MBG4 = this.MB5 + (this.MBG3 * (1 - this.MB5));
    console.log("MBG4 = "+this.MBG4);
    

    this.MDG1 = this.MD1 + (this.MD2 * (1 - this.MD1));
    console.log("MDG1 = "+this.MDG1);
    this.MDG2 = this.MD3 + (this.MDG1 * (1 - this.MD3));
    console.log("MDG2 = "+this.MDG2);
    this.MDG3 = this.MD4 + (this.MDG2 * (1 - this.MD4));
    console.log("MDG3 = "+this.MDG3);
    this.MDG4 = this.MD5 + (this.MDG3 * (1 - this.MD5));
    console.log("MDG4 = "+this.MDG4);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HasilDiagnosisPage');
  }


  goTos(demam, berkeringat, lelah, nafsuMakan, beratBadan) {
    // var x = [batukBau, batukDarah, batukMual, sesakNapas, nyeriDada, demam, 
    //   berkeringat, menggigil, lelah, nafsuMakan, beratBadan];
    //   console.log("isi dari x = "+x);
    console.log(this.cfAkut, this.cfKronis, this.cfMuda, this.cfTua);
    if (this.cfKronis == undefined && this.cfTua == undefined) { //AM
      if (this.rule == "1Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfMuda,
        );
       
        let MBG5 = Number(this.mbRule1) + (Number(this.MBG4) * (1 - Number(this.mbRule1)));       
        let MDG5 = Number(this.mdRule1) + (Number(this.MDG4) * (1 - Number(this.mdRule1)));

        console.log("mbRule1 = "+this.mbRule1);
        console.log("mdRule1 = "+this.mdRule1);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5 = "+MBG5);
        console.log("MDG5 = "+MDG5);
        let z1 = MBG5-MDG5; 
        console.log("wi = "+w1);
        console.log("zi = "+z1);
        let defuzzifikasi = (w1*z1)/z1;
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        console.log("CF 1 = "+CF1);
        this.HASIL = CF1*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfAkut == undefined && this.cfTua == undefined) { //KM
      if (this.rule == "1Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfMuda,
        );
        
        let MBG5 = Number(this.mbRule1) + (Number(this.MBG4) * (1 - Number(this.mbRule1)));       
        let MDG5 = Number(this.mdRule1) + (Number(this.MDG4) * (1 - Number(this.mdRule1)));

        console.log("mbRule1 = "+this.mbRule1);
        console.log("mdRule1 = "+this.mdRule1);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5 = "+MBG5);
        console.log("MDG5 = "+MDG5);
        let z1 = MBG5 - MDG5;
        console.log("wi = "+w1);
        console.log("zi = "+z1);
        let defuzzifikasi = (w1*z1)/z1;
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        console.log("CF 1 = "+CF1);
        this.HASIL = CF1*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfKronis == undefined && this.cfMuda == undefined) { //AT
      if (this.rule == "1Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfTua,
        );
        
        let MBG5 = Number(this.mbRule1) + (Number(this.MBG4) * (1 - Number(this.mbRule1)));       
        let MDG5 = Number(this.mdRule1) + (Number(this.MDG4) * (1 - Number(this.mdRule1)));

        console.log("mbRule1 = "+this.mbRule1);
        console.log("mdRule1 = "+this.mdRule1);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5 = "+MBG5);
        console.log("MDG5 = "+MDG5);
        let z1 = MBG5 - MDG5;
        console.log("wi = "+w1);
        console.log("zi = "+z1);
        let defuzzifikasi = (w1*z1)/z1;
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        console.log("CF 1 = "+CF1);
        this.HASIL = CF1*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfAkut == undefined && this.cfMuda == undefined) { //KT
      if (this.rule == "1Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfTua,
        );
        
        let MBG5 = Number(this.mbRule1) + (Number(this.MBG4) * (1 - Number(this.mbRule1)));       
        let MDG5 = Number(this.mdRule1) + (Number(this.MDG4) * (1 - Number(this.mdRule1)));

        console.log("mbRule1 = "+this.mbRule1);
        console.log("mdRule1 = "+this.mdRule1);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5 = "+MBG5);
        console.log("MDG5 = "+MDG5);
        let z1 = MBG5 - MDG5;
        console.log("wi = "+w1);
        console.log("zi = "+z1);
        let defuzzifikasi = (w1*z1)/z1;
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        console.log("CF 1 = "+CF1);
        this.HASIL = CF1*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfTua == undefined) { //AM KM
      if (this.rule == "2Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfMuda,);
        let w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfMuda,);

        let MBG5a = Number(this.mb1Rule2) + (Number(this.MBG4) * (1 - Number(this.mb1Rule2)));       
        let MDG5a= Number(this.md1Rule2) + (Number(this.MDG4) * (1 - Number(this.md1Rule2)));
        let MBG5b = Number(this.mb2Rule2) + (Number(this.MBG4) * (1 - Number(this.mb2Rule2)));       
        let MDG5b = Number(this.md2Rule2) + (Number(this.MDG4) * (1 - Number(this.md2Rule2)));

        console.log("mb1Rule2 = "+this.mb1Rule2);
        console.log("md1Rule2 = "+this.md1Rule2);
        console.log("mb2Rule2 = "+this.mb2Rule2);
        console.log("md2Rule2 = "+this.md2Rule2);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5a = "+MBG5a);
        console.log("MDG5a = "+MDG5a);
        console.log("MBG5b = "+MBG5b);
        console.log("MDG5b = "+MDG5b);
        let z1 = MBG5a - MDG5a;
        let z2 = MBG5b - MDG5b;
        console.log("w1 = "+w1);
        console.log("w2 = "+w2);
        console.log("z1 = "+z1);
        console.log("z2 = "+z2);
        let defuzzifikasi = ((w1*z1)+(w2*z2))/(z1+z2);
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        let CF2 = defuzzifikasi * z2;
        console.log("CF 1 = "+CF1);
        console.log("CF 2 = "+CF2);
        let CF_KOMBINASI = CF1 + (CF2 * (1 - CF1));
        console.log("CF_KOMBINASI = "+CF_KOMBINASI);
        this.HASIL = CF_KOMBINASI*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfKronis == undefined) { //AM AT
      if (this.rule == "2Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfMuda,);
        let w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfTua,);

        let MBG5a = Number(this.mb1Rule2) + (Number(this.MBG4) * (1 - Number(this.mb1Rule2)));       
        let MDG5a= Number(this.md1Rule2) + (Number(this.MDG4) * (1 - Number(this.md1Rule2)));
        let MBG5b = Number(this.mb2Rule2) + (Number(this.MBG4) * (1 - Number(this.mb2Rule2)));       
        let MDG5b = Number(this.md2Rule2) + (Number(this.MDG4) * (1 - Number(this.md2Rule2)));

        console.log("mb1Rule2 = "+this.mb1Rule2);
        console.log("md1Rule2 = "+this.md1Rule2);
        console.log("mb2Rule2 = "+this.mb2Rule2);
        console.log("md2Rule2 = "+this.md2Rule2);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5a = "+MBG5a);
        console.log("MDG5a = "+MDG5a);
        console.log("MBG5b = "+MBG5b);
        console.log("MDG5b = "+MDG5b);
        let z1 = MBG5a - MDG5a;
        let z2 = MBG5b - MDG5b;
        console.log("w1 = "+w1);
        console.log("w2 = "+w2);
        console.log("z1 = "+z1);
        console.log("z2 = "+z2);
        let defuzzifikasi = ((w1*z1)+(w2*z2))/(z1+z2);
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        let CF2 = defuzzifikasi * z2;
        console.log("CF 1 = "+CF1);
        console.log("CF 2 = "+CF2);
        let CF_KOMBINASI = CF1 + (CF2 * (1 - CF1));
        console.log("CF_KOMBINASI = "+CF_KOMBINASI);
        this.HASIL = CF_KOMBINASI*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfAkut == undefined) { //KM KT
      if (this.rule == "2Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfMuda,);
        let w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfTua,);

        let MBG5a = Number(this.mb1Rule2) + (Number(this.MBG4) * (1 - Number(this.mb1Rule2)));       
        let MDG5a= Number(this.md1Rule2) + (Number(this.MDG4) * (1 - Number(this.md1Rule2)));
        let MBG5b = Number(this.mb2Rule2) + (Number(this.MBG4) * (1 - Number(this.mb2Rule2)));       
        let MDG5b = Number(this.md2Rule2) + (Number(this.MDG4) * (1 - Number(this.md2Rule2)));

        console.log("mb1Rule2 = "+this.mb1Rule2);
        console.log("md1Rule2 = "+this.md1Rule2);
        console.log("mb2Rule2 = "+this.mb2Rule2);
        console.log("md2Rule2 = "+this.md2Rule2);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5a = "+MBG5a);
        console.log("MDG5a = "+MDG5a);
        console.log("MBG5b = "+MBG5b);
        console.log("MDG5b = "+MDG5b);
        let z1 = MBG5a - MDG5a;
        let z2 = MBG5b - MDG5b;
        console.log("w1 = "+w1);
        console.log("w2 = "+w2);
        console.log("z1 = "+z1);
        console.log("z2 = "+z2);
        let defuzzifikasi = ((w1*z1)+(w2*z2))/(z1+z2);
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        let CF2 = defuzzifikasi * z2;
        console.log("CF 1 = "+CF1);
        console.log("CF 2 = "+CF2);
        let CF_KOMBINASI = CF1 + (CF2 * (1 - CF1));
        console.log("CF_KOMBINASI = "+CF_KOMBINASI);
        this.HASIL = CF_KOMBINASI*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfMuda == undefined) { //AT KT
      if (this.rule == "2Rule") {
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfTua,);
        let w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfTua,);

        let MBG5a = Number(this.mb1Rule2) + (Number(this.MBG4) * (1 - Number(this.mb1Rule2)));       
        let MDG5a= Number(this.md1Rule2) + (Number(this.MDG4) * (1 - Number(this.md1Rule2)));
        let MBG5b = Number(this.mb2Rule2) + (Number(this.MBG4) * (1 - Number(this.mb2Rule2)));       
        let MDG5b = Number(this.md2Rule2) + (Number(this.MDG4) * (1 - Number(this.md2Rule2)));

        console.log("mb1Rule2 = "+this.mb1Rule2);
        console.log("md1Rule2 = "+this.md1Rule2);
        console.log("mb2Rule2 = "+this.mb2Rule2);
        console.log("md2Rule2 = "+this.md2Rule2);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5a = "+MBG5a);
        console.log("MDG5a = "+MDG5a);
        console.log("MBG5b = "+MBG5b);
        console.log("MDG5b = "+MDG5b);
        let z1 = MBG5a - MDG5a;
        let z2 = MBG5b - MDG5b;
        console.log("w1 = "+w1);
        console.log("w2 = "+w2);
        console.log("z1 = "+z1);
        console.log("z2 = "+z2);
        let defuzzifikasi = ((w1*z1)+(w2*z2))/(z1+z2);
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        let CF2 = defuzzifikasi * z2;
        console.log("CF 1 = "+CF1);
        console.log("CF 2 = "+CF2);
        let CF_KOMBINASI = CF1 + (CF2 * (1 - CF1));
        console.log("CF_KOMBINASI = "+CF_KOMBINASI);
        this.HASIL = CF_KOMBINASI*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
          hasil: this.HASIL,
        });
      }
    }

    if (this.cfMuda !== undefined && this.cfTua !== undefined && this.cfKronis !== undefined && this.cfAkut !== undefined) { //AM KM AT KT
      if (this.rule == "4Rule") {
        
        let w1 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfMuda,);
        let w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfMuda,);
        let w3 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfAkut, this.cfTua,);
        let w4 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan,
          this.cfKronis, this.cfTua,);

        let MBG5a = Number(this.mb1Rule4) + (Number(this.MBG4) * (1 - Number(this.mb1Rule4)));       
        let MDG5a=  Number(this.md1Rule4) + (Number(this.MDG4) * (1 - Number(this.md1Rule4)));
        let MBG5b = Number(this.mb2Rule4) + (Number(this.MBG4) * (1 - Number(this.mb2Rule4)));       
        let MDG5b = Number(this.md2Rule4) + (Number(this.MDG4) * (1 - Number(this.md2Rule4)));
        let MBG5c = Number(this.mb3Rule4) + (Number(this.MBG4) * (1 - Number(this.mb3Rule4)));       
        let MDG5c = Number(this.md3Rule4) + (Number(this.MDG4) * (1 - Number(this.md3Rule4)));
        let MBG5d = Number(this.mb4Rule4) + (Number(this.MBG4) * (1 - Number(this.mb4Rule4)));       
        let MDG5d = Number(this.md4Rule4) + (Number(this.MDG4) * (1 - Number(this.md4Rule4)));

        console.log("mb1Rule4 = "+this.mb1Rule4);
        console.log("md1Rule4 = "+this.md1Rule4);
        console.log("mb2Rule4 = "+this.mb2Rule4);
        console.log("md2Rule4 = "+this.md2Rule4);
        console.log("mb3Rule4 = "+this.mb3Rule4);
        console.log("md3Rule4 = "+this.md3Rule4);
        console.log("mb4Rule4 = "+this.mb4Rule4);
        console.log("md4Rule4 = "+this.md4Rule4);
        console.log("MBG4 = "+this.MBG4);
        console.log("MDG4 = "+this.MDG4);
        console.log("MBG5a = "+MBG5a);
        console.log("MDG5a = "+MDG5a);
        console.log("MBG5b = "+MBG5b);
        console.log("MDG5b = "+MDG5b);
        console.log("MBG5c = "+MBG5c);
        console.log("MDG5c = "+MDG5c);
        console.log("MBG5d = "+MBG5d);
        console.log("MDG5d = "+MDG5d);
        let z1 = MBG5a - MDG5a;
        let z2 = MBG5b - MDG5b;
        let z3 = MBG5c - MDG5c;
        let z4 = MBG5d - MDG5d;
        console.log("w1 = "+w1);
        console.log("w2 = "+w2);
        console.log("w3 = "+w3);
        console.log("w4 = "+w4);
        console.log("z1 = "+z1);
        console.log("z2 = "+z2);
        console.log("z3 = "+z3);
        console.log("z4 = "+z4);
        let defuzzifikasi = ((w1*z1)+(w2*z2)+(w3*z3)+(w4*z4))/(z1+z2+z3+z4);
        console.log("deffuzifikasi = "+defuzzifikasi);
        let CF1 = defuzzifikasi * z1;
        let CF2 = defuzzifikasi * z2;
        let CF3 = defuzzifikasi * z3;
        let CF4 = defuzzifikasi * z4;
        console.log("CF 1 = "+CF1);
        console.log("CF 2 = "+CF2);
        console.log("CF 3 = "+CF3);
        console.log("CF 4 = "+CF4);
        let CF_KOMBINASI1 = CF1 + (CF2 * (1 - CF1));
        let CF_KOMBINASI2 = CF3 + (CF_KOMBINASI1 * (1 - CF3));
        let CF_KOMBINASI3 = CF4 + (CF_KOMBINASI2 * (1 - CF4));
        console.log("CF_KOMBINASI = "+CF_KOMBINASI3);
        this.HASIL = CF_KOMBINASI3*100;
        console.log("HASIL = "+this.HASIL+" %");
        this.navCtrl.push(HasilPersentaseDiagnosisPage, {
              hasil: this.HASIL,
            });
      }
    }

    if(isNaN(this.HASIL)){
        console.log("Ada yang salah");
        this.showAlertNaN();
      }




    // var w2 = Math.min(demam, berkeringat, lelah, nafsuMakan, beratBadan);
    //   console.log("w1 = "+w1,"w2 = "+w2);
    // var z1= this.MBG11_1-this.MDG11_1;
    // var z2= this.MBG11_2-this.MDG11_2;
    // console.log("z1 = "+z1,"z2 = "+z2);

    // var defuzzifikasi = ((w1*z1)+(w2*z2))/(z1+z2);
    // console.log("defuzzifikasi = "+defuzzifikasi);

    // var CF1=defuzzifikasi*z1;
    // var CF2=defuzzifikasi*z2;
    // console.log("CF1 = "+CF1,"CF2 = "+CF2);

    // var CF_KOMBINASI = CF1 + (CF2 * (1 - CF1));
    // console.log("CF KOMBINASI = "+CF_KOMBINASI);
    // var HASIL = CF_KOMBINASI*100;
    // console.log("HASIL = "+HASIL+" %");

    // if(isNaN(HASIL)){
    //   console.log("Ada yang salah");
    //   this.showAlertNaN();
    // }
    // else if(HASIL<=10 && HASIL>=0){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD1I
    //   });
    //   console.log(this.SD1I);
    // }
    // else if(HASIL<=20 && HASIL>=11){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD2I
    //   });
    //   console.log(this.SD2I);
    // }
    // else if(HASIL<=30 && HASIL>=21){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD3I
    //   });
    //   console.log(this.SD3I);
    // }
    // else if(HASIL<=40 && HASIL>=31){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD4I
    //   });
    //   console.log(this.SD4I);
    // }
    // else if(HASIL<=50 && HASIL>=41){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD5I
    //   });
    //   console.log(this.SD5I);
    // }
    // else if(HASIL<=60 && HASIL>=51){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD6I
    //   });
    //   console.log(this.SD6I);
    // }
    // else if(HASIL<=70 && HASIL>=61){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD7I
    //   });
    //   console.log(this.SD7I);
    // }
    // else if(HASIL<=80 && HASIL>=71){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD8I
    //   });
    //   console.log(this.SD8I);
    // }
    // else if(HASIL<=90 && HASIL>=81){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD9I
    //   });
    //   console.log(this.SD9I);
    // }
    // else if(HASIL<=100 && HASIL>=91){
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //     saran: this.SD10I
    //   });
    //   console.log(this.SD10I);
    // }
    // else{
    //   this.navCtrl.push(HasilPersentaseDiagnosisPage, {
    //     hasil: HASIL,
    //   });
    // }


    // console.log(batukBau, batukDarah, batukMual, sesakNapas, nyeriDada, demam, 
    //   berkeringat, menggigil, lelah, nafsuMakan, beratBadan);
  }

  showAlertNaN() {
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'Ada yang salah nih...',
      buttons: ['OKE']
    });
    alert.present();
  }

}
