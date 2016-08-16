import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.css'],
  directives: [ CORE_DIRECTIVES, CHART_DIRECTIVES, NgClass, FORM_DIRECTIVES]
})
export class LineChartComponent implements OnInit {

  private dataLoaded: boolean;
  private lineChartData: Array<any> = [{
    data: [87, 92, 88, 81, 75, 69, 65, 88],
    label: 'Temperature'
  }];
  private lineChartLabels: Array<string> = ['11 AM', '2 PM', '5 PM', '8 PM', '11 PM', '2 AM', '5 AM', '8 AM'];

  private lineChartOptions: any = {
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
    animation: 'false',
    responsive: 'true'
  };

  private lineChartColours: any = {
    backgroundColor: '#FEF9CC',
    borderColor: '#BDBEC0',
    pointBackgroundColor: '#BDBEC0',
    pointBorderColor: '#FFF',
    pointHoverBackgroundColor: '#FFF',
    pointHoverBorderColor: 'rgba(148, 159, 177, 0.8)'
  };

  private lineChartLegend:boolean = true;
  private lineChartType:string = 'Line';

  constructor() {
    this.dataLoaded = true; // TODO: load from service
  }

  ngOnInit() {
  }

  chartClicked(e: any): void {
    console.log(e); //TODO: decide on action
  }

  chartHovered(e: any): void {
    console.log(e); //TODO: decide on action
  }
}
