import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SpinnerModule} from 'primeng/spinner';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SpinnerModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    FieldsetModule,
    CalendarModule,
    CheckboxModule
  ],
  exports: [  
    InputTextModule,
    ButtonModule,
    SpinnerModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    FieldsetModule,
    CalendarModule,
    CheckboxModule
    
  ]
})
export class PrimengModule { }
