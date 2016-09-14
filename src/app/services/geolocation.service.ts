import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeolocationService {

  private googleURL = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(private http: Http) { }

  getLocation(): Promise<any> {
    return new Promise((res, rej) =>
    {
      this.getBrowserLocation().then((coordinates) => {
        return this.getCityFromCoords(coordinates.coords).then((loc) => {
          console.log('loc is ', loc);
          return loc;
        });
      })
    });
  }

  getBrowserLocation(): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        return navigator.geolocation.getCurrentPosition(resolve, reject,
          { "enableHighAccuracy": true, "maximumAge": 0 }
        );
      }
    );
  }

  getCityFromCoords(coords: any): Promise<any> {
    console.log('argument coords', coords)
    return this.http.get(`${this.googleURL}${coords.latitude},${coords.longitude}&sensor=true`)
      .toPromise()
      .then(res => {
        var geoLocation = {
          coords: coords,
          neighborhood: null,
          city: null,
          state: null,
          country: null
        };
        var location = res.json().results[0];
        location.address_components.forEach(function (loc) {
          loc.types.forEach(function (type) {
            type = type.toLowerCase();
            if (type == 'neighborhood') {
              geoLocation['neighborhood'] = loc.long_name;
            } else if (type == 'locality') {
              geoLocation['city'] = loc.long_name;
            } else if (type == 'administrative_area_level_1') {
              geoLocation['state'] = loc.long_name;
            } else if (type == 'country') {
              geoLocation['country'] = loc.long_name;
            }
          });
        });
        return geoLocation;
      })
      .catch(err => console.log('error occured => ', err));
  }
}