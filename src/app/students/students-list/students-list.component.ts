
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StudentListItem } from '../models/student-list-item.interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  activeStudent: StudentListItem;
  @Input() students: StudentListItem[];
  @Output() clickOnStudent = new EventEmitter();

  onClick(student) {
    this.activeStudent = student;
    this.clickOnStudent.emit(student.id);
  }

}
