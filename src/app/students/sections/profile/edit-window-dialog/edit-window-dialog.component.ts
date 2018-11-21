import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Student } from 'src/app/shared/models/student.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../common/notifications/notification.service';
import { keys, reduce } from 'lodash/fp';

@Component({
  selector: 'app-edit-window-dialog',
  templateUrl: './edit-window-dialog.component.html',
  styleUrls: ['./edit-window-dialog.component.scss']
})
export class EditWindowDialogComponent implements OnInit {

  profileDialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditWindowDialogComponent>,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Student) {}

  ngOnInit() {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.notificationService.warningNotification('Cancel');
  }

  onOkClick(): void {
    this.notificationService.successNotification('Submit');
  }

  createForm() {
    const props = keys(this.data);
    const getControl = (acc, key) => ({
      ...acc,
      [key]: [this.data[key],
      [Validators.required]]
    });
    this.profileDialogForm = this.formBuilder.group({
      ...reduce(getControl, {})(props),
      group: [this.data.group.name, [Validators.required]],
      email: [this.data.email, [Validators.required, Validators.email]],
      description: [this.data.description]
    });
  }
}
