import { Component } from '@angular/core';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { ModalController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
RssData: NewsRss;
  constructor(public modalController: ModalController, private http: HttpClient) {
    this.GetRssFeedData()
  }
  
  public async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      //cssClass: 'login-modal-class'
    });
    console.log("try presentiung modal");
    return await modal.present();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  machwas(){
    alert("hallo!")
  }

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get("https://diekreative.org/feed/podcast/").toPromise()
      .then(data => {
        let parseString = xml2js.parseString;
        console.log("parse blubb"+JSON.stringify(data));
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
          console.log("parse err +"+ JSON.stringify(err));
        });
      }).catch(error=>{
        console.log("parse err + " + JSON.stringify(error));
      });
  }

  

  /*presentModal(){
    console.log("t3st")
  }*/

}
