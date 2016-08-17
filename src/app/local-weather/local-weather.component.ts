import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'local-weather',
  templateUrl: 'local-weather.component.html',
  styleUrls: ['local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {
  // example of weather api response json
  private weatherJson = {
    "display_location": {
      "full": "San Francisco, CA",
      "city": "San Francisco",
      "state": "CA",
      "state_name": "California",
      "country": "US",
      "country_iso3166": "US",
      "zip": "94101",
      "latitude": "37.77500916",
      "longitude": "-122.41825867",
      "elevation": "47.00000000"
    },
    "estimated": {},
    "station_id": "KCASANFR58",
    "observation_time": "Last Updated on June 27, 5:27 PM PDT",
    "observation_time_rfc822": "Wed, 27 Jun 2012 17:27:13 -0700",
    "observation_epoch": "1340843233",
    "local_time_rfc822": "Wed, 27 Jun 2012 17:27:14 -0700",
    "local_epoch": "1340843234",
    "local_tz_short": "PDT",
    "local_tz_long": "America/Los_Angeles",
    "local_tz_offset": "-0700",
    "weather": "Partly Cloudy",
    "temperature_string": "66.3 F (19.1 C)",
    "temp_f": 66.3,
    "temp_c": 19.1,
    "relative_humidity": "65%",
    "wind_string": "From the NNW at 22.0 MPH Gusting to 28.0 MPH",
    "wind_dir": "NNW",
    "wind_degrees": 346,
    "wind_mph": 22.0,
    "wind_gust_mph": "28.0",
    "wind_kph": 35.4,
    "wind_gust_kph": "45.1",
    "pressure_mb": "1013",
    "pressure_in": "29.93",
    "pressure_trend": "+",
    "dewpoint_string": "54 F (12 C)",
    "dewpoint_f": 54,
    "dewpoint_c": 12,
    "heat_index_string": "NA",
    "heat_index_f": "NA",
    "heat_index_c": "NA",
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "66.3 F (19.1 C)",
    "feelslike_f": "66.3",
    "feelslike_c": "19.1",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "",
    "UV": "5",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "partlycloudy",
    "icon_url": "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
    "forecast_url": "http://www.wunderground.com/US/CA/San_Francisco.html",
    "history_url": "http://www.wunderground.com/history/airport/KCASANFR58/2012/6/27/DailyHistory.html",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.773285,-122.417725"
  }

  public weatherData: any =
  {
      city: this.weatherJson.display_location.city,
      state: this.weatherJson.display_location.state,
      weather: this.weatherJson.weather,
      temp_f: Math.round(this.weatherJson.temp_f),
      temp_c: Math.round(this.weatherJson.temp_c),
      pressure_in: this.weatherJson.pressure_in,
      relative_humidity: this.weatherJson.relative_humidity,
      wind_dir: this.weatherJson.wind_dir,
      wind_mph: this.weatherJson.wind_mph,
      feelslike_f: Math.round(parseFloat(this.weatherJson.feelslike_f)),
      feelslike_c: Math.round(parseFloat(this.weatherJson.feelslike_c)),
      visibility_mi: this.weatherJson.visibility_mi,
      icon: this.weatherJson.icon,
      icon_url: this.weatherJson.icon_url,
      tempHigh: 55, // TODO: get from somewhere
      tempLow: 95, // TODO: get from somewhere
      precip: this.weatherJson.precip_today_in,
      humidity: this.weatherJson.relative_humidity,
      rainFall: 'N/A',
      snowDepth: 'N/A',
  };

  constructor() {
  }

  ngOnInit() {
  }
}