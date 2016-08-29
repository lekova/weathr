import { Component, OnInit } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  styleUrls: ['app/navbar/navbar.component.css'],
  directives: [ CollapseDirective]
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: boolean = true;
  private isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
