import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html'
})
export class NotifyPage {
  pageTitle: string = "Ahihi";
  lat: any  ;
  lng: any ;
  constructor(private geo: Geolocation, private push: Push ) {
    this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
      this.push.createChannel({
        id: "testchannel1",
        description: "My first test channel",
        // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
        importance: 3
       }).then(() => console.log('Channel created'));
       
       // Delete a channel (Android O and above)
       this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
       
       // Return a list of currently configured channels
       this.push.listChannels().then((channels) => console.log('List of channels', channels))
       
       // to initialize push notifications
       
       const options: PushOptions = {
          android: {},
          ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
          },
          windows: {},
          browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
          }
       };
       
       const pushObject: PushObject = this.push.init(options);
       
       
       pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
       
       pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
       
       pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });
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
