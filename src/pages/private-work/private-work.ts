import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';
import { UserProvider } from '../../providers/user/user';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the PrivateWorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-work',
  templateUrl: 'private-work.html',
})
export class PrivateWorkPage {

  _theme;
  _refresher = null;
  items = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public themeProvider: ThemeProvider,
    public userProvider: UserProvider,
    public http: Http
  ) {
    this._theme = this.themeProvider._theme;
    this.getdata();
  }

  //获取数据
  getdata() {
        console.log(this.userProvider._user._id);
        let url = "https://www.devonhello.com/chihuv3/my_work";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "id="+ this.userProvider._user._id+"" + "&len=" + this.items.length, {
          headers: headers
        })
          .subscribe((res) => {
            if (this._refresher) {
              this._refresher.complete();
            }
            console.log(res.json());
            this.items = this.items.concat(res.json());
          });
      }
    
      doRefresh(refresher) {
        this.items = [];
        this.getdata();
    
        this._refresher = refresher;
      }
    
      doInfinite(infiniteScroll) {
    
        this.getdata();
        setTimeout(() => {
          infiniteScroll.complete();
        }, 1500);
      }
    
      //查看菜谱详情
      open( _id ){
        this.navCtrl.push( "OpenWorkPage",{
          _id: _id
        } );
      }

}
