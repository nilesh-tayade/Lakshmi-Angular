import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FileListComponent } from './file-list/file-list.component';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';

const routes: Routes = [
  {path:'',component:RelationDashboardComponent,children:[
    {path:'files',component:FileListComponent},
    {path:'apply-loan/:id',component:ApplyLoanComponent},
    {path:'applicant-list',component:ApplicantListComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationRoutingModule { }
