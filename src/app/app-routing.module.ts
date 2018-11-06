import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { mainRoutes } from 'src/app/main/main-routing.module';

const routes: Routes = [
  { path: '',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: mainRoutes
  },
  { path: 'register' , component: RegisterComponent },
  { path: 'login',     component: LoginComponent },
  { path: '404-error', component: NotFoundComponent },
  { path: '**',        redirectTo: '404-error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
