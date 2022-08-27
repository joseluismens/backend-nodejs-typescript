import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { PendingInvestigationsComponent } from './components/pending-investigations/pending-investigations.component';



@NgModule({
  declarations: [
    PendingInvestigationsComponent,
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }
