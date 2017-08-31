import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html'
})
export class DynamicPage {

  _user;
  _refresher = null;
  _infiniteScroll = null;
  items = [];
  NoData = false;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public events: Events,
    public userProvider: UserProvider,
    public http: Http
  ) {
    this._user = this.userProvider._user;
    if(this._user._id){
      this.getdata();
    }
    
    events.subscribe('user', (user) => {
      this._user = user;
      this.items = [];
      this.NoData = false;
      this.getdata();
    });
  }

  //获取数据
  getdata() {
    if (!this.NoData) {
      let url = "https://www.devonhello.com/chihuv3/get_friend_share";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "len=" + this.items.length + "&users=" + JSON.stringify(this.userProvider._friend) + "&id=" + this.userProvider._user._id, {
        headers: headers
      })
        .subscribe((res) => {

          if (this._refresher) {
            this._refresher.complete();
          }
          if (this._infiniteScroll) {
            this._infiniteScroll.complete();
          }
          
          if (res.json() == "2") {
            this.NoData = true;
            return true;
          }
          console.log(res.json());
          this.items = this.items.concat(res.json());

        });
    } else {
      this._infiniteScroll.complete();
    }

  }

  doRefresh(refresher) {
    this.items = [];
    this.getdata();

    this._refresher = refresher;
  }

  doInfinite(infiniteScroll) {
    this._infiniteScroll = infiniteScroll;
    if(!this.NoData){
      this.getdata();
    }else{
      infiniteScroll.complete();
    }
    
  }

  //查看分享详情
  open(_id) {
    this.navCtrl.push("OpenSharePage", {
      _id: _id
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

}
