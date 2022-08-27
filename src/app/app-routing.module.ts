import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { PagesRoutingModule } from './modules/dashboard/pages-routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { NotfoundpageComponent } from './shared/components/notfoundpage/notfoundpage.component';




const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: '**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthRoutingModule,PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
