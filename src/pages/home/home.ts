import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = 'HomeWorkPage';
  page2: any = 'HomeSharePage';
  page3: any = 'HomeArticlePage';

  _theme;
  _user;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public events: Events,
    public userProvider: UserProvider
  ) {
    this._user = this.userProvider._user;
    events.subscribe('user', (user) => {
      this._user = user;
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

}
