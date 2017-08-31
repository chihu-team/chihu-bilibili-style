import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeProvider } from '../providers/theme/theme';
import { UserProvider } from '../providers/user/user';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  rootPage:any = TabsPage;
  _theme;
  _oldTheme;
  _user = {
    userimg:'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
    name:'游客',
  };

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public themeProvider: ThemeProvider,
    public menuCtrl: MenuController,
    public events: Events,
    public userProvider: UserProvider
  ) {
    this._oldTheme = this._theme = this.themeProvider._theme;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    events.subscribe('theme', (theme) => {
      this._oldTheme = this._theme = theme;
    });
    events.subscribe('user', (user) => {
      this._user = user;
    });
  }

  //打开主题page
  theme(){
    this.menuCtrl.close();
    this.nav.push( "ThemePage" );
  }

  //设置
  setting(){
    this.menuCtrl.close();
    this.nav.push( "SettingPage" );
  }

  openPage( pageName ){
    this.menuCtrl.close();
    this.nav.push( pageName );
  }

  //夜间模式
  setDark(){
    if(this._theme == "theme_dark"){
      this._theme = this.themeProvider._old_theme;
      this.themeProvider.setTheme( this._theme );
    }else{
      this.themeProvider.setTheme( "theme_dark" );
    }
    
  }

  //检查登录状态
  checkLogin(page){
    
    if(this.userProvider._user._id){
      this.openPage(page);
    }else{
      this.menuCtrl.close();
      this.nav.push( 'LoginPage' );
    }
  }
}
