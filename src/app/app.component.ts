import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { ModalController } from '@ionic/angular';
import { LoginModalPage } from './login-modal/login-modal.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  login = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseX: FirebaseX,
    private menu: MenuController,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.firebaseX.getToken()
  .then(token => {
                 console.log(`The token is ${token}`);}) // save the token server-side and use it to push notifications to this device
  .catch(error => alert(`Error getting token ${error}`));
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  closeFirst(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      cssClass: 'login-modal-class'
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
