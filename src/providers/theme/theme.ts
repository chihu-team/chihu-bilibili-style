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
        this._theme = val;
        this.events.publish('theme', this._theme);
      }
      console.log('Your theme is', this._theme);
    });
  }

  //设置/切换主题
  setTheme( theme ){
    this._theme = theme;
    this.storage.set('theme', theme);
    this.events.publish('theme', this._theme);
  }

}
