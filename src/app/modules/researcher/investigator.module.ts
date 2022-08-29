import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigatorRoutingModule } from './investigator-routing.module';
import { AddProjectRequestComponent } from './components/add-project-request/add-project-request.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    AddProjectRequestComponent,
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    InvestigatorRoutingModule,
    SharedModule
  ]
})
export class InvestigatorModule { }
