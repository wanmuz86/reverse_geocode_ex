import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
message : String
  constructor(public navCtrl: NavController,
  	private geolocation: Geolocation,
  	private nativeGeocoder: NativeGeocoder) {

  }
ionViewDidLoad(){
	}

	getMyLoc(){
		this.geolocation.getCurrentPosition().then((resp) => {


		this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
  .then((result: NativeGeocoderReverseResult) => {

  	this.message = result.locality + " " + result.subLocality + " " +result.countryName
  	})
  .catch((error: any) => console.log(error));
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

	}
}
