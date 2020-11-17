import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HasilPersentaseDiagnosisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hasil-persentase-diagnosis',
  templateUrl: 'hasil-persentase-diagnosis.html',
})
export class HasilPersentaseDiagnosisPage {
  hasil: any;
  saran: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hasil = parseFloat(navParams.get('hasil')).toFixed(2);
    this.saran = navParams.get('saran');
  }

  home(){
    this.navCtrl.popToRoot()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HasilPersentaseDiagnosisPage');
  }

}
