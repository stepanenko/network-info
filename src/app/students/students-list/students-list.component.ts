import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentListItem } from '../models/student-list-item.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  @Output()
  clickOnStudent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  students: StudentListItem[]

  constructor() { }

  ngOnInit() {
  }

  onClick(id: number) {
    this.clickOnStudent.emit(id);
  }

}
