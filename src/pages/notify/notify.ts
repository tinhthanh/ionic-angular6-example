import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html'
})
export class NotifyPage {
  pageTitle: string = "Ahihi";
  lat: any  ;
  lng: any ;
  constructor(private geo: Geolocation ) {
  }
   ionViewDidLoad() {
     this.geo.getCurrentPosition().then( pos => {
       this.lat = pos.coords.latitude ;
       this.lng = pos.coords.longitude;
     } ).catch ( err =>  {
      console.log("err");
      this.pageTitle  = " Local Faild"
     }
       
    );
   }
}
