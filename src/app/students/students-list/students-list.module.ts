
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { StudentsListComponent } from './students-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    StudentsListComponent
  ],
  declarations: [
    StudentsListComponent,
    ListItemComponent
  ]
})
export class StudentsListModule { }
