import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmAllFilesComponent } from './cm-all-files/cm-all-files.component';
import { CmApprovedFileComponent } from './cm-approved-file/cm-approved-file.component';
import { CmRejectedFileComponent } from './cm-rejected-file/cm-rejected-file.component';
import { CreditManagerDashboardComponent } from './credit-manager-dashboard/credit-manager-dashboard.component';

const routes: Routes = [
  {path:'',component:CreditManagerDashboardComponent,children:[
    {path:'all-files',component:CmAllFilesComponent},
    {path:'approved',component:CmApprovedFileComponent},
    {path:'rejected',component:CmRejectedFileComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
