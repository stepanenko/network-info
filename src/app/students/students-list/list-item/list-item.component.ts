
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentListItem } from '../../models/student-list-item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input()
  student: StudentListItem;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    this.click.emit();
  }

}
