import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { ProjectRequestComponent } from './components/project-request/project-request.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { PendingprojectsComponent } from './components/pendingprojects/pendingprojects.component';


@NgModule({
  declarations: [
    ProjectRequestComponent,
    AllProjectsComponent,
    PendingprojectsComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
