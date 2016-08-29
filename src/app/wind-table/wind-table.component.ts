import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Moment } from 'moment/moment';


@Component({
  selector: 'wind-table',
  templateUrl: 'app/wind-table/wind-table.component.html',
  styleUrls: ['app/wind-table/wind-table.component.css'],
  directives: [NgStyle],
})
export class WindTableComponent implements OnInit {

  public dataLoaded: boolean = true;
  public times:Array<any> = ['11 AM', '2 PM', '5 Pm', '8 PM', '11 PM', '2 AM', '5 AM', '8 AM'];
  public arrows: Array<string> = [];
  public directions: Array<string> = ["SSW", "W", "NNW", "NNE", "NNE", "NNE", "NE", "ENE"];
  public speeds: Array<number> = [9, 11, 4, 6, 7, 9, 13, 13];

  constructor() { }

  ngOnInit() {
    this.calculateDirection();
  }

  calculateDirection(): void {
    for(let dir of this.directions) {
      var degrees = this.getRotationAngle(dir);
      this.arrows.push(`rotate(${degrees}deg)`);
    }
  }

  getRotationAngle(direction: string): number {
    switch(direction) {
      case "E":
        return 0;
      case "ESE":
        return 23;
      case "SE":
        return 45;
      case "SSE":
        return 68;
      case "S":
        return 90;
      case "SSW":
        return 113;
      case "SW":
        return 135;
      case "WSW":
        return 158;
      case "W":
        return 180;
      case "WNE":
        return 203;
      case "NW":
        return 225;
      case "NNW":
        return 248;
      case "N":
        return 270;
      case "NNE":
        return 293;
      case "NE":
        return 315;
      case "ENE":
        return 338;
    }
  }
}