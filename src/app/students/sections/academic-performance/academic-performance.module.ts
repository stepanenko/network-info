import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicPerformanceComponent } from './academic-performance.component';
import { TableModule } from '../../../common/table/table.module';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AcademicPerformanceComponent,
  ]
})
export class AcademicPerformaceModule { }
