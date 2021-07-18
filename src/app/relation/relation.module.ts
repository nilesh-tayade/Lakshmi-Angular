import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationRoutingModule } from './relation-routing.module';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FileListComponent } from './file-list/file-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';


@NgModule({
  declarations: [
    RelationDashboardComponent,
    ApplyLoanComponent,
    FileListComponent,
    ApplicantListComponent
  ],
  imports: [
    CommonModule,
    RelationRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class RelationModule { }
