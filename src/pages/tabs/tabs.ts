import { Component } from '@angular/core';
import { ThemeProvider } from '../../providers/theme/theme';
import { IclassPage } from '../iclass/iclass';
import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { DynamicPage } from '../dynamic/dynamic';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IclassPage;
  tab3Root = DynamicPage;
  tab4Root = MessagePage;

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
