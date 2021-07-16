import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditManagerDashboardComponent } from './credit-manager-dashboard/credit-manager-dashboard.component';

const routes: Routes = [
  {path:'',component:CreditManagerDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
