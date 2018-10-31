
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentListItem } from '../models/student-list-item.interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  @Output()
  clickOnStudent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  students: StudentListItem[]

  onClick(id: number) {
    this.clickOnStudent.emit(id);
  }

}
