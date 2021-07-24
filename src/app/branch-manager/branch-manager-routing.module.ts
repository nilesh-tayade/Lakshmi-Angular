import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchManagerDashboardComponent } from './branch-manager-dashboard/branch-manager-dashboard.component';

const routes: Routes = [
  {path:'',component:BranchManagerDashboardComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchManagerRoutingModule { }
