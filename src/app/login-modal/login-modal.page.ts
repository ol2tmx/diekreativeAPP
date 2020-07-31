import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChurchapiService } from '../connectors/churchapi.service'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(public modalController:ModalController, public churchapiService:ChurchapiService) { }
  username;
  password;

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  login(){
    console.log("login test");
    this.churchapiService.login(this.username,this.password).toPromise().then((res)=>{
      console.log("login: "+JSON.stringify(res));
    }).catch((err)=>{
      console.log("login: "+JSON.stringify(err))
    })
  }
}
