import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css']
})
export abstract class DynamicUiComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Lemon';
  }

}
