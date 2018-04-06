import { Component } from '@angular/core';
import { MapProvider } from '../../providers/map/map';
import { MyLocation } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mapId: string = "map_canvas1";

  constructor(private map: MapProvider) {
  }

  ionViewWillEnter() {
    this.map.getMyLocation().then((location: MyLocation) => {
      this.map.attachMap(this.mapId, location.latLng);
    });
  }

  ionViewWillLeave() {
    this.map.detachMap();
  }
}
