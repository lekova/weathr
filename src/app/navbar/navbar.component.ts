import { Component, OnInit } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ CollapseDirective]
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: boolean = true;
  private isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
