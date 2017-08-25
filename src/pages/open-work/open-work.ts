import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';

/**
 * Generated class for the OpenWorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-work',
  templateUrl: 'open-work.html',
})
export class OpenWorkPage {

  _theme;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public themeProvider: ThemeProvider
  ) {
    this._theme = this.themeProvider._theme;
  }

}
