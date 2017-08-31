import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-iclass',
  templateUrl: 'iclass.html'
})
export class IclassPage {

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
