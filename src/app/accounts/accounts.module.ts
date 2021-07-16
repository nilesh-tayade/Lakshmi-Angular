import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AcccountsDashboardComponent } from './acccounts-dashboard/acccounts-dashboard.component';


@NgModule({
  declarations: [
    AcccountsDashboardComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
