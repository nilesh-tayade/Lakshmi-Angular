import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcAllFilesComponent } from './ac-all-files/ac-all-files.component';
import { AcDisbursedFilesComponent } from './ac-disbursed-files/ac-disbursed-files.component';
import { AcccountsDashboardComponent } from './acccounts-dashboard/acccounts-dashboard.component';

const routes: Routes = [
  {path:'',component:AcccountsDashboardComponent,children:[
    {path:'all-files',component:AcAllFilesComponent},
    {path:'disbursed',component:AcDisbursedFilesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
