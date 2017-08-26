import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectArticlePage } from './collect-article';

@NgModule({
  declarations: [
    CollectArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(CollectArticlePage),
  ],
})
export class CollectArticlePageModule {}
