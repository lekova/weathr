import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, LineChartComponent]
})
export class AppComponent {
  title = 'app works!';
}
