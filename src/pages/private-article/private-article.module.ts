import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateArticlePage } from './private-article';

@NgModule({
  declarations: [
    PrivateArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateArticlePage),
  ],
})
export class PrivateArticlePageModule {}
