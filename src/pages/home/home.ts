import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = 'HomeWorkPage';
  page2: any = 'HomeSharePage';
  page3: any = 'HomeArticlePage';

  _theme;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private themeProvider: ThemeProvider,
    public events: Events
  ) {
    this._theme = this.themeProvider._theme;
    events.subscribe('theme', (theme) => {
      this._theme = theme;
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

}
