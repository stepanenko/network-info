
import { Component, Input, OnInit } from '@angular/core';

import { StudentListItem } from '../../models/student-list-item.interface';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  avatar;
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  @Input() isActive: boolean;
  @Input() student: StudentListItem;

  constructor(private service: StudentsService) {}

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar() {
    this.service.getAvatar(this.student.id)
      .subscribe((data) => this.avatar = data);
  }

}
