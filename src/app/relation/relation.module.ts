import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationRoutingModule } from './relation-routing.module';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';


@NgModule({
  declarations: [
    RelationDashboardComponent
  ],
  imports: [
    CommonModule,
    RelationRoutingModule
  ]
})
export class RelationModule { }
