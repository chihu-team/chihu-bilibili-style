import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';
import { UserProvider } from '../../providers/user/user';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  _theme;
  name: '';
  pass: '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public themeProvider: ThemeProvider,
    public userProvider: UserProvider,
    public http: Http
  ) {
    this._theme = this.themeProvider._theme;
  }

  login() {
    
        if (!this.name.length || !this.pass.length) {
          return true;
        }
    
        let url = "https://www.devonhello.com/chihuv3/login";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
          headers: headers
        })
          .subscribe((res) => {
            if (res.json()[0]['_id']) {
              console.log(res.json()[0]);
              this.userProvider.setUser(res.json()[0]);
              this.navCtrl.pop();
            }
          });
      }

}
