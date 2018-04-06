import { Component } from '@angular/core';
import { MapProvider } from '../../providers/map/map';
import { MyLocation } from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  mapId: string = "map_canvas2";

  constructor(private map: MapProvider) {
  }

  ionViewWillEnter() {
    this.map.attachMap(this.mapId, {
      lat: 43.0741704,
      lng: -89.3809802
    });
  }

  ionViewWillLeave() {
    this.map.detachMap();
  }
}
