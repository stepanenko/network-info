import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ProfileModule } from '../students/sections/profile/profile.module';
import { ChartComponent } from './sections/chart/chart.component';
import { StudentsListModule } from './students-list/students-list.module';
import { TabnavModule } from 'src/app/common/tabnav/tabnav.module';
import { StudentsRoutingModule } from './students-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ProfileModule,
    StudentsListModule,
    TabnavModule,
    RouterModule
  ],
  declarations: [
    StudentsComponent,
    ChartComponent
  ],
  exports: [ StudentsComponent ]
})
export class StudentsModule { }
