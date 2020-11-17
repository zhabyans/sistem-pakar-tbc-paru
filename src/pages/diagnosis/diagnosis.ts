import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HasilDiagnosisPage } from '../hasil-diagnosis/hasil-diagnosis';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-diagnosis',
  templateUrl: 'diagnosis.html',
})
export class DiagnosisPage {
  inputtext;
  inputtext2;
  inputtext3;
  radiocf;
  gejala_cf1;


  place;
  key: string = 'username';
  gejala_cfRef: AngularFireList<any>;
  gejala_cf: Observable<any[]>;
  subUsia: any;
  subLamaBatuk: any;
  rule: any;
  inputForm: any;
  // subSuhuTubuh: any;
  // subSuhuTubuh2: any;
  gejala_fzRef: any;

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

  s1p: number;
  s1i: any;
  s2: any;
  cfAkut: number;
  cfKronis: number;
  cfMuda: number;
  cfTua: number;

  constructor(public alertCtrl: AlertController, fb: FormBuilder, private storage: Storage, public afDb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.inputForm = new FormGroup({
      usia: new FormControl(),
      lamaBatuk: new FormControl(),
      // suhuTubuh: new FormControl()
    })

    this.inputForm = FormGroup;
    this.inputForm = fb.group
      ({
        'lamaBatuk': [null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern('^(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)$')])],
        // 'suhuTubuh': [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^(?:35|36|37|38|39|40|41|35[.]1|35[.]2|35[.]3|35[.]4|35[.]5|35[.]6|35[.]7|35[.]8|35[.]9|36[.]1|36[.]2|36[.]3|36[.]4|36[.]5|36[.]6|36[.]7|36[.]8|36[.]9|37[.]1|37[.]2|37[.]3|37[.]4|37[.]5|37[.]6|37[.]7|37[.]8|37[.]9|38[.]1|38[.]2|38[.]3|38[.]4|38[.]5|38[.]6|38[.]7|38[.]8|38[.]9|39[.]1|39[.]2|39[.]3|39[.]4|39[.]5|39[.]6|39[.]7|39[.]8|39[.]9|!0.|!0,)$')])],
        'usia': [null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern('^(12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)$')])],
        // 'suhuTubuh': [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^([3.5-4][0-9]|[3-4][0-9][.][0-9])$')])],
      })

    this.afDb.database.ref('saran_dokter/-LVcBY00SSC7P6cHajfJ/').on('value', res => {
      this.s1p = res.val().persentase;
      this.s1i = res.val().isi_saran;
    });
    // this.s2=this.afDb.database.ref('saran_dokter/-LVcBd4DPl24tvYAtUYs/').on('value', res => {
    //   console.log(res.val().isi_saran,res.val().persentase)
    //  });

    console.log("ini s1i= " + this.s1i);
    console.log("ini s1p= " + this.s1p);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosisPage');
  }

  editBerita(event, data) {
    this.navCtrl.push(HasilDiagnosisPage, {
      item: data
    });
  }

  goTos(batukBau, batukDarah, batukMual, sesakNapas, nyeriDada, demam,
    berkeringat, menggigil, lelah, nafsuMakan, beratBadan) {

    console.log(batukBau, batukDarah, batukMual, sesakNapas, nyeriDada, demam,
      berkeringat, menggigil, lelah, nafsuMakan, beratBadan);
  }

  goTo(usia, lamaBatuk) {
    //=============================================MENENTUKAN RULE==========================================================================================================================
    if (lamaBatuk < 8 || lamaBatuk > 14) {
      if (usia < 30 || usia > 40) {
        this.rule = "1Rule";
        console.log("1 Rule");
      }
    }

    if (lamaBatuk == 8 || lamaBatuk == 9 || lamaBatuk == 10 || lamaBatuk == 11 || lamaBatuk == 12 || lamaBatuk == 13 || lamaBatuk == 14) {
      if (usia < 30 || usia > 40) {
        this.rule = "2Rule";
        console.log("2 Rule batuk");
      }
    }

    if (lamaBatuk < 8 || lamaBatuk > 14) {
      if (usia == 30 || usia == 31 || usia == 32 || usia == 33 || usia == 34 || usia == 35 || usia == 36 || usia == 37 || usia == 38 || usia == 39 || usia == 40) {
        this.rule = "2Rule";
        console.log("2 Rule usia")
      }
    }

    if (lamaBatuk == 8 || lamaBatuk == 9 || lamaBatuk == 10 || lamaBatuk == 11 || lamaBatuk == 12 || lamaBatuk == 13 || lamaBatuk == 14) {
      if (usia == 30 || usia == 31 || usia == 32 || usia == 33 || usia == 34 || usia == 35 || usia == 36 || usia == 37 || usia == 38 || usia == 39 || usia == 40) {
        this.rule = "4Rule";
        console.log("4 Rule batuk dan usia")
      }
    }
    //====================================================END========================================================================================================================

    //================================================MENGHITUNG CF USER==================================================================================================================
    if (lamaBatuk <= 14) {
      this.cfAkut = (14 - lamaBatuk) / 14;
      console.log("cf akut : " + this.cfAkut);
    }
    if (lamaBatuk >= 8 && lamaBatuk <= 22) {
      this.cfKronis = (lamaBatuk - 8) / 14;
      console.log("cf kronis : " + this.cfKronis);
    }
    if (lamaBatuk > 22) {
      this.cfKronis = (22 - 8) / 14;
      console.log("cf kronis : " + this.cfKronis);
    }
    if (usia <= 40 ){
      this.cfMuda = (40 - usia) / 28;
      console.log("cf muda : " + this.cfMuda);
    }
    if (usia >= 30 && usia <= 58){
      this.cfTua = (usia - 30) / 28;
      console.log("cf tua : " + this.cfTua);      
    }
    if (usia > 58){
      this.cfTua = (58 - 30) / 28;
      console.log("cf tua : " + this.cfTua);      
    }
//=====================================================END======================================================================================================================================

//===============================================MENGAMBIL DATA==================================================================================================================
      if (this.rule == "1Rule") {//AM
        if (lamaBatuk < 8) {
          if (usia < 30) {
            this.afDb.database.ref('gejala_fz/AM').on('value', res => {
              this.mbRule1 = res.val().MB, this.mdRule1 = res.val().MD
            });

            console.log(this.mbRule1, this.mdRule1);
          }
        }
      }
    if (this.rule == "1Rule") {//KM
      if (lamaBatuk > 14) {
        if (usia < 30) {
          this.afDb.database.ref('gejala_fz/KM').on('value', res => {
            this.mbRule1 = res.val().MB, this.mdRule1 = res.val().MD
          });
          console.log(this.mbRule1, this.mdRule1);
        }
      }
    }
    if (this.rule == "1Rule") {//AT
      if (lamaBatuk < 8) {
        if (usia > 40) {
          this.afDb.database.ref('gejala_fz/AT').on('value', res => {
            this.mbRule1 = res.val().MB, this.mdRule1 = res.val().MD
          });
          console.log(this.mbRule1, this.mdRule1);
        }
      }
    }
    if (this.rule == "1Rule") {//KT
      if (lamaBatuk > 14) {
        if (usia > 40) {
          this.afDb.database.ref('gejala_fz/KT').on('value', res => {
            this.mbRule1 = res.val().MB, this.mdRule1 = res.val().MD
          });
          console.log(this.mbRule1, this.mdRule1);
        }
      }
    }

    if (this.rule == "2Rule") {//AM KM
      if (lamaBatuk <= 14 && lamaBatuk >= 8) {
        if (usia < 30) {
          this.afDb.database.ref('gejala_fz/AM').on('value', res => {
            this.mb1Rule2 = res.val().MB, this.md1Rule2 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/KM').on('value', res => {
            this.mb2Rule2 = res.val().MB, this.md2Rule2 = res.val().MD
          });
          console.log(this.mb1Rule2, this.md1Rule2, this.mb2Rule2, this.md2Rule2);
        }
      }
    }

    if (this.rule == "2Rule") {
      if (lamaBatuk < 8) {
        if (usia >= 30 && usia <= 40) {
          this.afDb.database.ref('gejala_fz/AM').on('value', res => {
            this.mb1Rule2 = res.val().MB, this.md1Rule2 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/AT').on('value', res => {
            this.mb2Rule2 = res.val().MB, this.md2Rule2 = res.val().MD
          });
          console.log(this.mb1Rule2, this.md1Rule2, this.mb2Rule2, this.md2Rule2);
        }
      }
    }

    if (this.rule == "2Rule") {
      if (lamaBatuk > 14) {
        if (usia >= 30 && usia <= 40) {
          this.afDb.database.ref('gejala_fz/KM').on('value', res => {
            this.mb1Rule2 = res.val().MB, this.md1Rule2 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/KT').on('value', res => {
            this.mb2Rule2 = res.val().MB, this.md2Rule2 = res.val().MD
          });
          console.log(this.mb1Rule2, this.md1Rule2, this.mb2Rule2, this.md2Rule2);
        }
      }
    }

    if (this.rule == "2Rule") {
      if (lamaBatuk <= 14 && lamaBatuk >= 8) {
        if (usia > 40) {
          this.afDb.database.ref('gejala_fz/AT').on('value', res => {
            this.mb1Rule2 = res.val().MB, this.md1Rule2 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/KT').on('value', res => {
            this.mb2Rule2 = res.val().MB, this.md2Rule2 = res.val().MD
          });
          console.log(this.mb1Rule2, this.md1Rule2, this.mb2Rule2, this.md2Rule2);
        }
      }
    }

    if (this.rule == "4Rule") {
      if (lamaBatuk <= 14 && lamaBatuk >= 8) {
        if (usia >= 30 && usia <= 40) {
          this.afDb.database.ref('gejala_fz/AM').on('value', res => {
            this.mb1Rule4 = res.val().MB, this.md1Rule4 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/KM').on('value', res => {
            this.mb2Rule4 = res.val().MB, this.md2Rule4 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/AT').on('value', res => {
            this.mb3Rule4 = res.val().MB, this.md3Rule4 = res.val().MD
          });
          this.afDb.database.ref('gejala_fz/KT').on('value', res => {
            this.mb4Rule4 = res.val().MB, this.md4Rule4 = res.val().MD
          });
          console.log(this.mb1Rule4, this.md1Rule4, this.mb2Rule4, this.md2Rule4, this.mb3Rule4, this.md3Rule4, this.mb4Rule4, this.md4Rule4);
        }
      }
    }
    //==============================================END======================================================================================================================================

    //===========================================PINDAH HALAMAN======================================================================================================================
    if (this.rule == "1Rule") {
      
      if (this.mbRule1 == undefined || this.mdRule1 == undefined) {
        console.log("Ada yang salah lho 1");
        this.showAlert();
      }
      else {
        console.log("pindah halaman rule 1");
        this.navCtrl.push(HasilDiagnosisPage, {
          subLamaBatuk: this.subLamaBatuk,
          subUsia: this.subUsia,
          mbRule1: this.mbRule1,
          mdRule1: this.mdRule1,
          rule: this.rule,
          cfAkut: this.cfAkut,
          cfKronis: this.cfKronis,
          cfMuda: this.cfMuda,
          cfTua: this.cfTua
        });
      }
    }

    if (this.rule == "2Rule") {
      if (this.mb1Rule2 == undefined || this.mb2Rule2 == undefined || this.md1Rule2 == undefined || this.md2Rule2 == undefined) {
        console.log("Ada yang salah lho 2");
        this.showAlert();
      }
      else {
        console.log("pindah halaman rule 2");
        this.navCtrl.push(HasilDiagnosisPage, {
          subLamaBatuk: this.subLamaBatuk,
          subUsia: this.subUsia,
          mb1Rule2: this.mb1Rule2,
          md1Rule2: this.md1Rule2,
          mb2Rule2: this.mb2Rule2,
          md2Rule2: this.md2Rule2,
          rule: this.rule,
          cfAkut: this.cfAkut,
          cfKronis: this.cfKronis,
          cfMuda: this.cfMuda,
          cfTua: this.cfTua
        });
      }
    }


    if (this.rule == "4Rule") {
      if (this.mb1Rule4 == undefined || this.mb2Rule4 == undefined || this.mb3Rule4 == undefined || this.mb4Rule4 == undefined || this.md1Rule4 == undefined || this.md2Rule4 == undefined || this.md3Rule4 == undefined || this.md4Rule4 == undefined) {
        console.log("Ada yang salah lho 3");
        this.showAlert();
      }
      else{
        console.log("pindah halaman rule 4")
        this.navCtrl.push(HasilDiagnosisPage, {
          subLamaBatuk: this.subLamaBatuk,
          subUsia: this.subUsia,
          mb1Rule4: this.mb1Rule4,
          md1Rule4: this.md1Rule4,
          mb2Rule4: this.mb2Rule4,
          md2Rule4: this.md2Rule4,
          mb3Rule4: this.mb3Rule4,
          md3Rule4: this.md3Rule4,
          mb4Rule4: this.mb4Rule4,
          md4Rule4: this.md4Rule4,

          rule: this.rule,
          cfAkut: this.cfAkut,
          cfKronis: this.cfKronis,
          cfMuda: this.cfMuda,
          cfTua: this.cfTua
        });
      }
    }

    //====================================================END=================================================================================================================================================================================================================
    // else {
    //   console.log("pindah halaman");
    // this.navCtrl.push(HasilDiagnosisPage, {
    //   subUsia: this.subUsia,
    //   subLamaBatuk: this.subLamaBatuk,
    // subSuhuTubuh: this.subSuhuTubuh,
    // subSuhuTubuh2: this.subSuhuTubuh2,
    // MB12: this.MB12,
    // MD12: this.MD12,
    // MB13: this.MB13,
    // MD13: this.MD13,

    // });
    // }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'Ada yang salah lho...',
      buttons: ['OKE']
    });
    alert.present();
  }

  mcqAnswer(value) {
    console.log(value);
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      console.log('Your username is', val);
    });
  }
}
