import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bend-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export abstract class DataViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
