import { Component } from '@angular/core';
import { ThemeProvider } from '../../providers/theme/theme';
import { IclassPage } from '../iclass/iclass';
import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { DynamicPage } from '../dynamic/dynamic';
import { Events, Platform } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IclassPage;
  tab3Root = DynamicPage;
  tab4Root = MessagePage;

  _theme;
  iTimer;

  constructor(
    public themeProvider: ThemeProvider,
    public events: Events,
    public appVersion: AppVersion,
    public plt: Platform
  ) {
    this._theme = this.themeProvider._theme;
    events.subscribe('theme', (theme) => {
      this._theme = theme;
    });
    if( this.plt.is('cordova') ){
        this.getAppVersion();
    }else{
      console.log("注意，浏览器环境，Native插件将无法正常使用");
    }
  }

  getAppVersion(){
    this.appVersion.getVersionNumber().then((version) => {
      alert(version);
    });
  }
}
