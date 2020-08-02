import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifegroupsPageRoutingModule } from './lifegroups-routing.module';

import { LifegroupsPage } from './lifegroups.page';
import { LgMapComponent } from '../lg-map/lg-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifegroupsPageRoutingModule
  ],
  declarations: [LifegroupsPage, LgMapComponent]
})
export class LifegroupsPageModule {}
