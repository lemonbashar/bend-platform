import { Component, OnInit } from '@angular/core';
import {DynamicUiComponent} from './dynamic-ui.component';

@Component({
  selector: 'app-dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css']
})
export class DynamicUiExtendedComponent extends DynamicUiComponent implements OnInit {


  ngOnInit(): void {
    super.ngOnInit();
    this.name = 'JDIOIUOEIDPEKPOPDO';
  }
}
