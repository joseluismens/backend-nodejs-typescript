import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresidentRoutingModule } from './president-routing.module';
import { AddNewComponent } from '../../modules/president/components/add-new/add-new.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { EditNewComponent } from './components/edit-new/edit-new.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { CustomerService } from './components/table-filter/customerservice';
import { MemberService } from './components/register-request/memberservice';


@NgModule({
  declarations: [
    AddNewComponent,
    EditNewComponent,
    TableFilterComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    PresidentRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    DropdownModule
  ],
  providers: [CustomerService,MemberService],

})
export class PresidentModule { }
