import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';

const routes: Routes = [
  {path:'',component:OperationDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
