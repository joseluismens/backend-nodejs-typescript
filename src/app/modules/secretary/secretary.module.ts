import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import { PendingDocumentsComponent } from './components/pending-documents/pending-documents.component';


@NgModule({
  declarations: [
    PendingDocumentsComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule
  ]
})
export class SecretaryModule { }
