import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredigtenAudioPageRoutingModule } from './predigten-audio-routing.module';

import { PredigtenAudioPage } from './predigten-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredigtenAudioPageRoutingModule
  ],
  declarations: [PredigtenAudioPage]
})
export class PredigtenAudioPageModule {}
