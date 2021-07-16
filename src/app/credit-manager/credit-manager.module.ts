import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { CreditManagerDashboardComponent } from './credit-manager-dashboard/credit-manager-dashboard.component';


@NgModule({
  declarations: [
    CreditManagerDashboardComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule
  ]
})
export class CreditManagerModule { }
