import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcccountsDashboardComponent } from './acccounts-dashboard/acccounts-dashboard.component';

const routes: Routes = [
  {path:'',component:AcccountsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
