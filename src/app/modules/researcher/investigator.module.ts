import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigatorRoutingModule } from './investigator-routing.module';
import { AddProjectRequestComponent } from './components/add-project-request/add-project-request.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';



@NgModule({
  declarations: [
    AddProjectRequestComponent,
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    InvestigatorRoutingModule
  ]
})
export class InvestigatorModule { }
