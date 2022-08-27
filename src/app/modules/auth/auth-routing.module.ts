import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { PagesRoutingModule } from '../dashboard/pages-routing.module';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }

     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
