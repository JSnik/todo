import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import {ReportRoutingModule} from "./report-routing.module";


@NgModule({
  declarations: [ReportComponent, ReportRoutingModule],
  imports: [
    CommonModule
  ]
})
export class ReportModule { }
