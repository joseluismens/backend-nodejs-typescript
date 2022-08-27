import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { AllMembersComponent } from '../president/components/all-members/all-members.component';
import { AllProjectsComponent } from '../president/components/all-projects/all-projects.component';
import { ProjectRequestComponent } from '../president/components/project-request/project-request.component';
import { RegisterRequestComponent } from '../president/components/register-request/register-request.component';
import { PresidentModule } from '../president/president.module';


@NgModule({
  declarations: [
    AllMembersComponent,
    AllProjectsComponent,
    ProjectRequestComponent,
    RegisterRequestComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    PresidentModule

  ],
  

})
export class PagesModule { }
