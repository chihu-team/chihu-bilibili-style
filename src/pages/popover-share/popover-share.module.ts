import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverSharePage } from './popover-share';

@NgModule({
  declarations: [
    PopoverSharePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverSharePage),
  ],
})
export class PopoverSharePageModule {}
