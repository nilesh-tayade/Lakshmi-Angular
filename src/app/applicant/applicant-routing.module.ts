import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { MyFilesComponent } from './my-files/my-files.component';

const routes: Routes = [
  {path:'',component:ApplicantDashboardComponent,children:[
    {path:'my-files',component:MyFilesComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
