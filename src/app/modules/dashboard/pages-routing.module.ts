import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from '../president/components/all-projects/all-projects.component';
import { AllProjectsComponent as AllProjectComponentEditor } from '../publisher/components/all-projects/all-projects.component';
import { AllProjectsComponent as AllProjectComponentInvestigator } from '../researcher/components/all-projects/all-projects.component';
import { AllProjectsComponent as AllProjectsComponentReviewer } from '../reviewer/components/all-projects/all-projects.component';
import { ProjectRequestComponent } from '../president/components/project-request/project-request.component';
import { ProjectRequestComponent as ProjectRequestComponentEditor} from '../publisher/components/project-request/project-request.component';
import { RegisterRequestComponent } from '../president/components/register-request/register-request.component';
import { EditNewComponent } from '../president/components/edit-new/edit-new.component';
import { PagesComponent } from './pages.component';
import { TableFilterComponent } from '../president/components/table-filter/table-filter.component';
import { AllMembersComponent } from '../president/components/all-members/all-members.component';
import { AddNewComponent } from '../president/components/add-new/add-new.component';
import { PendingprojectsComponent } from '../publisher/components/pendingprojects/pendingprojects.component';
import { AddProjectRequestComponent } from '../researcher/components/add-project-request/add-project-request.component';
import { PendingInvestigationsComponent } from '../reviewer/components/pending-investigations/pending-investigations.component';
import { PendingDocumentsComponent } from '../secretary/components/pending-documents/pending-documents.component';

const routes: Routes = [
  

  {
    path:'admin',
    component:PagesComponent,
    children : [
      {
        path : 'allmembers',
        component : AllMembersComponent,
        data: { breadcrumb: 'Todos los miembros' , title : 'Todos los miembros'}
      },
      {
        path : 'memberrequest',
        component : RegisterRequestComponent,
        data: { breadcrumb: 'Solicitud de registros' , title : 'Solicitudes de registro'}
      },
      {
        path : 'allprojects',
        component : AllProjectsComponent
      },
      {
        path: 'projestrequest',
        component : ProjectRequestComponent
      },
      {
        path: 'addnew',
        component : AddNewComponent
      },
      {
        path: 'editnew',
        component : EditNewComponent
      },
      {
        path: 'table',
        component : TableFilterComponent
      },
    
    ]
    
  },
  {
    path: 'editor',
    component:PagesComponent,
    children : [
      {
        path: 'projestrequest',
        component : ProjectRequestComponentEditor
      },
      {
        path: 'allprojects',
        component : AllProjectComponentEditor 
      },
      {
        path : 'pendingprojects',
        component : PendingprojectsComponent
      }
      
    ]
  },
  {
    path : 'investigator',
    component:PagesComponent,

    children : [
      {
        path: 'addrequest',
        component : AddProjectRequestComponent
      },
      {
        path: 'allprojects',
        component : AllProjectComponentInvestigator
      },
    ]
  },
  {
    path : 'reviewer',
    component:PagesComponent,

    children : [
      {
        path: 'proyectos',
        component : AllProjectsComponentReviewer
      },
      {
        path: 'investigacionespendientes',
        component : PendingInvestigationsComponent
      },
    ]
  },
  {
    path : 'secretary',
    component:PagesComponent,

    children : [
      {
        path: 'documentospendientes',
        component : PendingDocumentsComponent
      }
    ]
  },
  

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
