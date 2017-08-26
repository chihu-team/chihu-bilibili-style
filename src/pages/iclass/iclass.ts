import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-iclass',
  templateUrl: 'iclass.html'
})
export class IclassPage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {

  }

  openMenu() {
    this.menuCtrl.open();
  }

}
