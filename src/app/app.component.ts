import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { WindTableComponent } from './wind-table/wind-table.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent,
    LineChartComponent,
    WindTableComponent
  ]
})
export class AppComponent {
}
