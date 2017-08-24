import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSharePage } from './home-share';

@NgModule({
  declarations: [
    HomeSharePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSharePage),
  ],
})
export class HomeSharePageModule {}
