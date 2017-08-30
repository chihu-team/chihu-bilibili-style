import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the OpenSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenSharePage {

  _theme;
  _id;
  _data:any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
    this._id = this.navParams.get( '_id' );
    this.getdata();
  }

  //获取数据
  getdata() {
    
        let url = "https://www.devonhello.com/chihuv3/open_share";
    
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
