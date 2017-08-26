import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionPage } from './collection';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    CollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionPage),
    SuperTabsModule.forRoot()
  ],
})
export class CollectionPageModule {}
