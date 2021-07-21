import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewLoanTypeComponent } from './view-loan-type/view-loan-type.component';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { ViewElectronicItemComponent } from './view-electronic-item/view-electronic-item.component';
import { AddElectronicItemComponent } from './add-electronic-item/add-electronic-item.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { AddBranchComponent } from './add-branch/add-branch.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserListComponent,
    ViewLoanTypeComponent,
    AddLoanTypeComponent,
    ViewElectronicItemComponent,
    AddElectronicItemComponent,
    ViewApplicantComponent,
    AddEmployeeComponent,
    ViewBranchComponent,
    AddBranchComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
