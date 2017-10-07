import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<boolean>();

  sidenavOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * An emitter is used to pass the event to the parent, but a service could be used as an alternative
   */
  openSideNav() {
    console.info("Toggle the sidenav...");
    if(this.sidenavOpen == false) {
      console.info("Open sidenav...");
      this.sidenavOpen = true;
      this.sidenavToggle.emit(this.sidenavOpen);
    } else {
      console.info("Close sidenav...");
      this.sidenavOpen = false;
      this.sidenavToggle.emit(this.sidenavOpen);
    }
    
  }

}
