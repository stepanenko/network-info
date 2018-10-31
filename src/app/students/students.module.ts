import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { ChartComponent } from './sections/chart/chart.component';
import { StudentsListModule } from './students-list/students-list.module';


@NgModule({
  imports: [
    CommonModule,
    StudentsListModule
  ],
  exports: [
    StudentsComponent
  ],
  declarations: [
    StudentsComponent,
    ProfileComponent,
    ChartComponent
  ]
})
export class StudentsModule { }
