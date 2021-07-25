import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursedFilesComponent } from '../applicant/disbursed-files/disbursed-files.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { CivilOkFileComponent } from './civil-ok-file/civil-ok-file.component';
import { FileListComponent } from './file-list/file-list.component';
import { RejectedFilesComponent } from './rejected-files/rejected-files.component';
import { RelApprovedFilesComponent } from './rel-approved-files/rel-approved-files.component';
import { RelDisbursedFilesComponent } from './rel-disbursed-files/rel-disbursed-files.component';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';

const routes: Routes = [
  {path:'',component:RelationDashboardComponent,children:[
    {path:'files',component:FileListComponent},
    {path:'civil-ok',component:CivilOkFileComponent},
    {path:'approved',component:RelApprovedFilesComponent},
    {path:'disbursed',component:RelDisbursedFilesComponent},
    {path:'rejected',component:RejectedFilesComponent},

    
    {path:'apply-loan/:id',component:ApplyLoanComponent},
    {path:'applicant-list',component:ApplicantListComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationRoutingModule { }
