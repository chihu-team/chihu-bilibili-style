import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateSharePage } from './private-share';

@NgModule({
  declarations: [
    PrivateSharePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateSharePage),
  ],
})
export class PrivateSharePageModule {}
