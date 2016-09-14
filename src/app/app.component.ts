import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';
import { LocalWeatherComponent } from './local-weather/local-weather.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { WindTableComponent } from './wind-table/wind-table.component';
import { TideTableComponent } from './tide-table/tide-table.component';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [NavbarComponent,
    LocationComponent,
    LocalWeatherComponent,
    LineChartComponent,
    WindTableComponent,
    TideTableComponent
  ],
  providers: [
    GeolocationService
  ]
})
export class AppComponent {

}
