import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { CreditManagerDashboardComponent } from './credit-manager-dashboard/credit-manager-dashboard.component';
import { CmAllFilesComponent } from './cm-all-files/cm-all-files.component';
import { CmApprovedFileComponent } from './cm-approved-file/cm-approved-file.component';
import { CmRejectedFileComponent } from './cm-rejected-file/cm-rejected-file.component';
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
    CreditManagerDashboardComponent,
    CmAllFilesComponent,
    CmApprovedFileComponent,
    CmRejectedFileComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule,
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
export class CreditManagerModule { }
