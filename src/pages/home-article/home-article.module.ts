import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeArticlePage } from './home-article';

@NgModule({
  declarations: [
    HomeArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeArticlePage),
  ],
})
export class HomeArticlePageModule {}
