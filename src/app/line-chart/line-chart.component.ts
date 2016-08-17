import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.css'],
  directives: [ CORE_DIRECTIVES, CHART_DIRECTIVES, NgClass]
})
export class LineChartComponent implements OnInit {

  public dataLoaded: boolean = true;
  public lineChartData: Array<any> = [{
    data: [87, 92, 88, 81, 75, 69, 65, 88],
    label: 'Temperature'
  }];
  public lineChartLabels: Array<string> = ['11 AM', '2 PM', '5 PM', '8 PM', '11 PM', '2 AM', '5 AM', '8 AM'];

  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true,
    scaleValuePaddingX: 10,
    scaleValuePaddingY: 10,
    showTooltips: false,
    animation: false,
    legend: {
      display: true,
      labels: {
        fontSize: 10,
      },
    },
    scales: {
      borderWidth: 0,
      yAxes: [{
        ticks: {
          fontSize: 10,
        },
        gridLines: {
          color: 'rgba(148,159,177,0.1)',
          drawTicks: true,
        },
        scaleShowValues: true,
      }],
      xAxes: [{
        ticks: {
          fontSize: 10,
        },
        gridLines: {
          color: 'rgba(148,159,177,0.1)',
          drawTicks: true,
        },
      }]
    },
    defaults: {
      scaleShowValues: true,
      scaleValuePaddingX: 10,
      scaleValuePaddingY: 10,
      global: {
        title: {
          mode: 'label'
        }
      }
    }
  };

  public lineChartColours:Array<any> = [
    { // yellow
      backgroundColor: '#fef9cc',
      borderColor: '#bdbec0',
      pointBackgroundColor: '#bdbec0',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

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
