import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  _theme;
  _id;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
    public themeProvider: ThemeProvider
  ) {
    this._theme = this.themeProvider._theme;
    this._id = this.userProvider._user._id;
  }

  exit(){
    this.userProvider.exit();
    this.navCtrl.pop();
  }

  MIT(){
    this.navCtrl.push( "MitPage" );
  }

  about(){
    this.navCtrl.push( "AboutPage" );
  }

}
