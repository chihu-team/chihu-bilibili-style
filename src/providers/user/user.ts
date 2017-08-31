import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  _user = {
    _id: null,
    userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
    name: '游客',
  }

  _friend = [];

  constructor(
    private storage: Storage,
    private events: Events,
    public http: Http
  ) {
    this.getUser();
  }

  getUser() {
    this.storage.get('user').then((val) => {
      if (val) {
        this._user = val;
        this.GetFriend();
        this.events.publish('user', this._user);
      }
    })
  }

  setUser(user) {
    this.storage.set('user', user).then(() => {
      this.getUser();
    });

  }

  exit() {
    this.storage.clear();
    this._user = {
      _id: null,
      userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
      name: '游客',
    };
    this._friend = [];
    this.events.publish('user', this._user);
  }

  GetFriend() {
    let url = "https://www.devonhello.com/chihuv3/get_friend";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        console.log(res.json());
        this._friend = res.json();
      });
  }

}
