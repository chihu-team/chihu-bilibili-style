import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeWorkPage } from './home-work';

@NgModule({
  declarations: [
    HomeWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeWorkPage),
  ],
})
export class HomeWorkPageModule {}
