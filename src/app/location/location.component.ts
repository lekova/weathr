import { Component, OnInit } from '@angular/core';
import { GoogleplaceDirective } from '../services/googleplace.directive';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'location',
  templateUrl: 'app/location/location.component.html',
  styleUrls: ['app/location/location.component.css'],
  directives: [ GoogleplaceDirective ],
  providers: [ GeolocationService ]
})
export class LocationComponent implements OnInit {

  private location: any;
  public address: Object;

  constructor(private _locationService: GeolocationService) { }

  ngOnInit() {
  }

  getBrowserLocation() {
    this._locationService.getLocation().
      then((location) => {
        this.location = location;
        this.address = this.location.city + ', ' + this.location.state;
      });
  }

  getAddress(place: Object) {
    this.address = place['formatted_address'];
    var location = place['geometry']['location'];
    var coords = { latitude: location.lat(), longitude: location.lng() };
    this._locationService.getCityFromCoords(coords)
      .then(result => {
        console.log('result is',  result);
      });
  }
}
