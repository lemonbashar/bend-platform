import { NgModule } from '@angular/core';
import {BendCoreModule} from 'bend-core';
import {TableModule} from 'primeng';
import {DataViewComponent} from './data/data-view/data-view.component';



@NgModule({
  declarations: [DataViewComponent],
  imports: [
    BendCoreModule,
    TableModule
  ],
  exports: [DataViewComponent]
})
export class BendCoreUiModule { }
