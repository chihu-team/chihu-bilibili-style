import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ThemeProvider {

  //默认主题
  _theme = 'theme_pink';
  _old_theme = 'theme_pink';

  constructor(
    private storage: Storage,
    private events: Events
  ) {
    this.init();
  }

  //初始化主题
  init(){
    this.storage.get('theme').then((val) => {
      if(val){
        
        this._theme = val.nowTheme;
        this._old_theme = val.oldTheme;
        this.events.publish('theme', this._theme);
      }
      console.log('Your theme is', this._theme);
    });
  }

  //设置/切换主题
  setTheme( theme ){
    var themeObj = {};
    themeObj['nowTheme'] = theme;
    themeObj['oldTheme'] = this._theme;
    this._old_theme = this._theme;
    this._theme = theme;
    this.storage.set('theme', themeObj);
    this.events.publish('theme', this._theme);
  }

}
