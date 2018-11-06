import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentsRoutes } from 'src/app/students/students-routing.module';
import { StudentsComponent } from 'src/app/students/students.component';
import { UnderConstructionComponent } from 'src/app/common/under-construction/under-construction.component';

export const mainRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: UnderConstructionComponent },
  { path: 'dashboard', component: UnderConstructionComponent },
  { path: 'students',  component: StudentsComponent, children: studentsRoutes },
  { path: 'admin',     component: UnderConstructionComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
