import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { InputBeritaPage } from '../pages/input-berita/input-berita';
import { RegisterPage } from '../pages/register/register';
import { DiagnosisPage } from '../pages/diagnosis/diagnosis';
import { DaftarGejalaPage } from '../pages/daftar-gejala/daftar-gejala';
import { DaftarGejalaFuzzyPage } from '../pages/daftar-gejala-fuzzy/daftar-gejala-fuzzy';
import { InputGejalaFuzzyPage } from '../pages/input-gejala-fuzzy/input-gejala-fuzzy';
import { HasilDiagnosisPage } from '../pages/hasil-diagnosis/hasil-diagnosis';
import { HasilPersentaseDiagnosisPage } from '../pages/hasil-persentase-diagnosis/hasil-persentase-diagnosis';
import { SaranDokterPage } from '../pages/saran-dokter/saran-dokter';
import { InputSaranDokterPage } from '../pages/input-saran-dokter/input-saran-dokter';


//angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import * as firebase from 'firebase';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AkunPage } from '../pages/akun/akun';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyBioFcp_hMnJOxK6sInp2cx3Dxvgs7p9JA",
  authDomain: "sistempakartbc.firebaseapp.com",
  databaseURL: "https://sistempakartbc.firebaseio.com",
  projectId: "sistempakartbc",
  storageBucket: "sistempakartbc.appspot.com",
  messagingSenderId: "860248312862"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    InputBeritaPage,
    RegisterPage,
    AkunPage,
    DiagnosisPage,
    DaftarGejalaPage,
    DaftarGejalaFuzzyPage,
    InputGejalaFuzzyPage,
    HasilDiagnosisPage,
    HasilPersentaseDiagnosisPage,
    SaranDokterPage,
    InputSaranDokterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    InputBeritaPage,
    RegisterPage,
    AkunPage,
    DiagnosisPage,
    DaftarGejalaPage,
    DaftarGejalaFuzzyPage,
    InputGejalaFuzzyPage,
    HasilDiagnosisPage,
    HasilPersentaseDiagnosisPage,
    SaranDokterPage,
    InputSaranDokterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AndroidFullScreen,
    
  ]
})
export class AppModule {}
