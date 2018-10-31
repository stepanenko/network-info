import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { StudentsListComponent } from './students-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    StudentsListComponent
  ],
  declarations: [StudentsListComponent, ListItemComponent]
})
export class StudentsListModule { }
