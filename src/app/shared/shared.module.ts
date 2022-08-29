import { NgModule } from '@angular/core';



import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
    declarations: [

    ],
    imports: [

        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSelectModule,
        MatFormFieldModule,
        DropdownModule,
        MatIconModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        MatStepperModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        MatChipsModule


    ],
    providers: [],
    bootstrap: [],
    exports: [
        TableModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSelectModule,
        MatFormFieldModule,
        DropdownModule,
      
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        MatStepperModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        MatChipsModule
        
        
    ]
})
export class SharedModule { }
