import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectWorkPage } from './collect-work';

@NgModule({
  declarations: [
    CollectWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectWorkPage),
  ],
})
export class CollectWorkPageModule {}
