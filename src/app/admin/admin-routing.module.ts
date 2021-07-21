import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddElectronicItemComponent } from './add-electronic-item/add-electronic-item.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { ViewElectronicItemComponent } from './view-electronic-item/view-electronic-item.component';
import { ViewLoanTypeComponent } from './view-loan-type/view-loan-type.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
    {path:'user-list',component:UserListComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'add-loan-type',component:AddLoanTypeComponent},
    {path:'view-loan-type',component:ViewLoanTypeComponent},
    {path:'add-electronic-item',component:AddElectronicItemComponent},
    {path:'view-electronic-item',component:ViewElectronicItemComponent},
    {path:'view-applicant',component:ViewApplicantComponent},
    {path:'view-branch',component:ViewBranchComponent},
    {path:'add-branch',component:AddBranchComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
