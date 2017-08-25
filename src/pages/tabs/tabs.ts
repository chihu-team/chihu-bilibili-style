import { Component } from '@angular/core';
import { ThemeProvider } from '../../providers/theme/theme';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  _theme;

  constructor(
    public themeProvider: ThemeProvider,
    public events: Events
  ) {
    this._theme = this.themeProvider._theme;
    events.subscribe('theme', (theme) => {
      this._theme = theme;
    });
  }
}
