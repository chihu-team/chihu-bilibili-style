import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenArticlePage } from './open-article';

@NgModule({
  declarations: [
    OpenArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenArticlePage),
  ],
})
export class OpenArticlePageModule {}
