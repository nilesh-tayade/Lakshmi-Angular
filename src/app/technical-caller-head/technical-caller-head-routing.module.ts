import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TchAllFilesComponent } from './tch-all-files/tch-all-files.component';
import { TchBadApplicantsComponent } from './tch-bad-applicants/tch-bad-applicants.component';
import { TchDashboardComponent } from './tch-dashboard/tch-dashboard.component';

const routes: Routes = [
  {path:'',component:TchDashboardComponent,children:[
    {path:'all-files',component:TchAllFilesComponent},
    {path:'bad-applicant',component:TchBadApplicantsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalCallerHeadRoutingModule { }
