import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalCallerHeadRoutingModule } from './technical-caller-head-routing.module';
import { TchDashboardComponent } from './tch-dashboard/tch-dashboard.component';
import { TchAllFilesComponent } from './tch-all-files/tch-all-files.component';
import { TchGoodApplicantsComponent } from './tch-good-applicants/tch-good-applicants.component';
import { TchBadApplicantsComponent } from './tch-bad-applicants/tch-bad-applicants.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TchDashboardComponent,
    TchAllFilesComponent,
    TchGoodApplicantsComponent,
    TchBadApplicantsComponent
  ],
  imports: [
    CommonModule,
    TechnicalCallerHeadRoutingModule,
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
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class TechnicalCallerHeadModule { }
