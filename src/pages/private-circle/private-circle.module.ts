import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateCirclePage } from './private-circle';

@NgModule({
  declarations: [
    PrivateCirclePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateCirclePage),
  ],
})
export class PrivateCirclePageModule {}
