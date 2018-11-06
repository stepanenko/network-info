import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './sections/profile/profile.component';
import { UnderConstructionComponent } from 'src/app/common/under-construction/under-construction.component';

export const studentsRoutes: Routes = [
  { path: ':id', redirectTo: ':id/profile', pathMatch: 'full'},
  { path: ':id/profile',  component: ProfileComponent },
  { path: ':id/chart',    component: UnderConstructionComponent },
  { path: ':id/academic', component: UnderConstructionComponent },
  { path: ':id/reports',  component: UnderConstructionComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class StudentsRoutingModule { }
