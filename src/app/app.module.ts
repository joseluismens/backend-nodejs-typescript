import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { PagesModule } from './modules/dashboard/pages.module';
import { NotfoundpageComponent } from './shared/components/notfoundpage/notfoundpage.component';
import { PresidentModule } from './modules/president/president.module';
import { InvestigatorModule } from './modules/researcher/investigator.module';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InvestigatorModule,
    PagesModule,
    AuthModule,
    SharedModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
