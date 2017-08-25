import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FocusPage } from './focus';

@NgModule({
  declarations: [
    FocusPage,
  ],
  imports: [
    IonicPageModule.forChild(FocusPage),
  ],
})
export class FocusPageModule {}
