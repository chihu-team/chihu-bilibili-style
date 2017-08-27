import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  _user = {
    id:null  
  }

  constructor(
    private storage: Storage
  ) {
    this.getUser();
  }

  getUser(){
    this.storage.get('user').then((val) => {
      if(val){
        this._user = val;
      }
    })
  }

  setUser( user ){
    this.storage.set('user', user).then(()=>{
      this.getUser();
    });
    
  }

}
