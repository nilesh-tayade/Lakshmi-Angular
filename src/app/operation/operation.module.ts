import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';


@NgModule({
  declarations: [
    OperationDashboardComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
