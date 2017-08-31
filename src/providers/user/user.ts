import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  _user = {
    _id:null,
    userimg:'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
    name:'游客',  
  }

  constructor(
    private storage: Storage,
    private events: Events
  ) {
    this.getUser();
  }

  getUser(){
    this.storage.get('user').then((val) => {
      if(val){
        this._user = val;
        this.events.publish('user', this._user);
      }
    })
  }

  setUser( user ){
    this.storage.set('user', user).then(()=>{
      this.getUser();
    });
    
  }

  exit(){
    this.storage.clear();
    this._user = {
      _id:null,
      userimg:'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
      name:'游客',  
    };
    this.events.publish('user', this._user);
  }

}
