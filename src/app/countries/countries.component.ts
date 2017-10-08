import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddCountry() {
    console.info("On adding a new country...");
  }

}
