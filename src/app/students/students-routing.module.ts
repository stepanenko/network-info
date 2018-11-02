import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { MainComponent } from 'src/app/main/main.component';
import { ProfileComponent } from './sections/profile/profile.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: 'students',
        component: StudentsComponent,
        children: [
          { path: ':id/profile', component: ProfileComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class StudentsRoutingModule { }
