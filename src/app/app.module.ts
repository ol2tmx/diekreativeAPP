import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchapiService } from './connectors/churchapi.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseX,
    ChurchapiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
