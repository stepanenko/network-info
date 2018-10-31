import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stud', component: StudentsComponent }, // DELETE before PUSH !!!
  { path: '', component: MainComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
