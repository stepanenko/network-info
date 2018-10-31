import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ProfileModule } from '../students/sections/profile/profile.module'
import { ChartComponent } from './sections/chart/chart.component';
import { StudentsListModule } from './students-list/students-list.module';


@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    StudentsListModule
  ],
  declarations: [
    StudentsComponent,
    ChartComponent
  ]
})
export class StudentsModule { }
