import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';

const routes: Routes = [
  {path:'',component:RelationDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationRoutingModule { }
