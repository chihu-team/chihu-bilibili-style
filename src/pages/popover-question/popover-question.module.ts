import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverQuestionPage } from './popover-question';

@NgModule({
  declarations: [
    PopoverQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverQuestionPage),
  ],
})
export class PopoverQuestionPageModule {}
