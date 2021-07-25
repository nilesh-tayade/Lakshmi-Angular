import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { DisbursedFilesComponent } from './disbursed-files/disbursed-files.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { MyFilesComponent } from './my-files/my-files.component';

const routes: Routes = [
  {path:'',component:ApplicantDashboardComponent,children:[
    {path:'my-files',component:MyFilesComponent},
    {path:'disbursed-files',component:DisbursedFilesComponent},
    {path:'loan-Details/:id',component:LoanDetailsComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
