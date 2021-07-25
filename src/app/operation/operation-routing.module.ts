import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditRejectedFileComponent } from './credit-rejected-file/credit-rejected-file.component';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';
import { OpsCreditApprovedComponent } from './ops-credit-approved/ops-credit-approved.component';
import { OpsFilesComponent } from './ops-files/ops-files.component';

const routes: Routes = [
  {path:'',component:OperationDashboardComponent ,children:[
    {path:'ops-files',component:OpsFilesComponent},
    {path:'credit-approved',component:OpsCreditApprovedComponent},
    {path:'credit-rejected',component:CreditRejectedFileComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
