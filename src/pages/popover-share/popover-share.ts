import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { ThemeProvider } from '../../providers/theme/theme';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the PopoverSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-share',
  templateUrl: 'popover-share.html',
})
export class PopoverSharePage {

  _ishidden: boolean = true;
  _ischeck: boolean = false;
  _theme
  _id;
  _uid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public themeProvider: ThemeProvider,
    public http: Http,
    public userProvider: UserProvider
  ) {
    this._theme = this.themeProvider._theme;
    this._uid = this.userProvider._user._id;
    this._id = this.navParams.data._data._id
    console.log(this.navParams.data._data);
    if (this._uid) {
      this.check();
    }
  }

  //检查是否点赞过
  check() {
    let url = "https://www.devonhello.com/chihuv3/check_like_share";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "id=" + this._id + "&uid=" + this._uid, {
          headers: headers
        })
          .subscribe((res) => {
            if (res.json().length != "0") {
              this._ishidden = false;
            }
            this._ischeck = true;
            console.log(res.json());
          });
  }

  //点赞
  like() {
    
        if (this._ischeck) {
          let url = "https://www.devonhello.com/chihuv3/like_share";
    
          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
          this.http.post(url, "id=" + this._id + "&uid=" + this._uid, {
            headers: headers
          })
            .subscribe((res) => {
              this._ishidden = false;
              console.log(res.json());
            });
        }
    
      }
    
      //取消点赞
      unlike() {
    
    
        let url = "https://www.devonhello.com/chihuv3/unlike_share";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "id=" + this._id + "&uid=" + this._uid, {
          headers: headers
        })
          .subscribe((res) => {
            this._ishidden = true;
            console.log(res.json());
          });
    
    
      }

}
