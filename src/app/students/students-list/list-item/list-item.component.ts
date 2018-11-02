
import { Component, Input, OnInit } from '@angular/core';

import { StudentListItem } from '../../models/student-list-item.interface';
import { StudentsService } from '../../students.service';

const defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  avatar: string = defaultAvatar;
  @Input() isActive: boolean;
  @Input() student: StudentListItem;

  constructor(private service: StudentsService) {}

  ngOnInit() {
    const av = this.service.getImage(this.student.id);
    this.avatar = av ? av : defaultAvatar;
  }

}
