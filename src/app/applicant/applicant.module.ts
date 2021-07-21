import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { MyFilesComponent } from './my-files/my-files.component';


@NgModule({
  declarations: [
    ApplicantDashboardComponent,
    MyFilesComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
