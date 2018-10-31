import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentListItem } from '../../models/student-list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  student: StudentListItem;

  @Output()
  click: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit(this.student.id);
  }

}
