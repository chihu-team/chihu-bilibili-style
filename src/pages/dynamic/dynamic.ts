import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html'
})
export class DynamicPage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {

  }

  openMenu() {
    this.menuCtrl.open();
  }

}
