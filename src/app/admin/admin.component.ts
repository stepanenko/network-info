import { Component } from '@angular/core';
import { DialogsService } from 'src/app/common/dialogs/dialogs.service';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { NotificationService } from 'src/app/common/notifications/notification.service';
import { filter } from 'rxjs/operators';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private dialogs: DialogsService,
    private databaseService: DatabaseService,
    private notification: NotificationService,
    private chatService: ChatService

  ) { }

  addStudent() {
    this.dialogs.openEditStudentDialog({title: 'Add new student'}).pipe(
      filter(Boolean)
    )
    .subscribe(res => {
      this.addStudentInDB(res);
    });
  }

  addStudentInDB(student) {
    this.databaseService.addStudent(student)
    .then(ok => this.notification.successNotification('User was successfully added'),
    err => this.notification.errorNotification('Add failed :('));
  }

  clearChatHistory() {
    if (confirm('Delete chat history?')) {
      this.chatService.clearHistory();
    }
  }

}
