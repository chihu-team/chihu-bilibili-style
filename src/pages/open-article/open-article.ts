import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ThemeProvider } from '../../providers/theme/theme';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the OpenArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-article',
  templateUrl: 'open-article.html',
})
export class OpenArticlePage {

  _theme;
  _id;
  _data:any = {};
  _popover = null;

  constructor(
    public navCtrl: NavController, 
    public themeProvider: ThemeProvider,
    public http: Http,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this._theme = this.themeProvider._theme;
    this._id = this.navParams.get( '_id' );
    this.getdata();
  }

  //获取数据
  getdata() {
    
        let url = "https://www.devonhello.com/chihuv3/open_question";
    
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        this.http.post(url, "id=" + this._id, {
          headers: headers
        })
          .subscribe((res) => {
            this._data = res.json()[0];
            this._popover = this.popoverCtrl.create('PopoverQuestionPage',{
              _data: this._data
            });
            console.log( this._data );
          });
      }

      presentPopover(ev) {
        if(this._popover){
          this._popover.present({ ev: ev });
        }
        
      }

}
