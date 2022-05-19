import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import {CurrencyRoutingModule} from "./currency-routing.module";
import {AgGridModule} from "ag-grid-angular";



@NgModule({
  declarations: [CurrencyComponent, ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
