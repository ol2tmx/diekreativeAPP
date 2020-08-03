import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatpickrModule } from 'angularx-flatpickr';

import { CalenderPrayerRoomPageRoutingModule } from './calender-prayer-room-routing.module';

import { CalenderPrayerRoomPage } from './calender-prayer-room.page';
import { CalenderPrayerRoomAngularComponent } from '../calender-prayer-room-angular/calender-prayer-room-angular.component'

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     CalenderPrayerRoomPageRoutingModule
//   ],
//   declarations: [CalenderPrayerRoomPage, CalenderPrayerRoomAngularComponent]
// })
// export class CalenderPrayerRoomPageModule {}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    IonicModule,
    CalenderPrayerRoomPageRoutingModule,   
    // BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [CalenderPrayerRoomPage, CalenderPrayerRoomAngularComponent],
  exports: [CalenderPrayerRoomAngularComponent],
})
export class CalenderPrayerRoomPageModule {}

// @NgModule({
//   imports: [
//     BrowserAnimationsModule,
//     CalendarModule.forRoot({
//       provide: DateAdapter,
//       useFactory: adapterFactory,
//     }),
//   ],
// })
// export class CalenderPrayerRoomPageModule {}
