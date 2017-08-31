import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
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
  _id;
  _data:any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public themeProvider: ThemeProvider,
    public http: Http
  ) {
    this._theme = this.themeProvider._theme;
    this._id = this.navParams.get( '_id' );
    this.getdata();
  }

  //获取数据
  getdata() {
    
        let url = "https://www.devonhello.com/chihuv3/open_work";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "id=" + this._id, {
          headers: headers
        })
          .subscribe((res) => {
            this._data = res.json()[0];
            console.log( this._data );
          });
      }

}
