import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateWorkPage } from './private-work';

@NgModule({
  declarations: [
    PrivateWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateWorkPage),
  ],
})
export class PrivateWorkPageModule {}
