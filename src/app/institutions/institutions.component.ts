import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})
export class InstitutionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddInstitution() {
    console.info("On adding a new institution...");
  }

}
