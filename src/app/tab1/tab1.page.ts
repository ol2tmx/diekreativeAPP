import { Component } from '@angular/core';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  hero = "Testhero";
  constructor(public modalController: ModalController) {}

// Play audio
//
public playAudio(url) {
  // Play the audio file at url
  var my_media = new Media(url,
      // success callback
      function () { console.log("playAudio():Audio Success"); },
      // error callback
      function (err) { console.log("playAudio():Audio Error: " + err); }
  );

  // Play audio
  my_media.play();

  // Pause after 10 seconds
  setTimeout(function () {
      my_media.pause();
  }, 10000);
}

  public async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      //cssClass: 'login-modal-class'
    });
    console.log("try presentiung modal");
    return await modal.present();
  }



  mymethod(){
    //this.playAudio("file.mp3");
    alert("Hallo");
  }
  /*presentModal(){
    console.log("t3st")
  }*/

}
