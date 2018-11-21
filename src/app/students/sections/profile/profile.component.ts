import { Component, OnInit } from '@angular/core';
import { switchMap, takeWhile, filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditWindowDialogComponent } from './edit-window-dialog/edit-window-dialog.component';
import { Student } from 'src/app/shared/models/student.interface';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { StudentsService } from '../../students.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  selectedStudent: Student;
  alive: boolean;
  selectedStudentId: string;
  dialogRef: MatDialogRef<EditWindowDialogComponent>;
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  constructor(
    private studentService: StudentsService,
    private databaseService: DatabaseService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.subscribeToStudent();
    this.subscribeToStudentId();
  }

  subscribeToStudent() {
    this.studentService.selectedStudent$
    .subscribe(student => {
      this.selectedStudent = student;
    });
  }

  subscribeToStudentId() {
    this.studentService.studentChange$
    .subscribe(id => {
      this.selectedStudentId = id;
    });
  }

  openDialog() {
    this.dialogRef = this.dialog.open(EditWindowDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '600px',
      data: {...this.selectedStudent}
    });
    this.alive = true;
  }

  subscribeToCloseEvent() {
    this.dialogRef.afterClosed()
    .pipe(
      takeWhile(() => this.alive),
      filter(Boolean)
      ).subscribe((value) => {
        value.birthdate = moment(value.birthdate).format();
      this.databaseService.updateSelectedStudent(this.selectedStudentId, value);
      });
  }

  onEditClick() {
    this.openDialog();
    this.subscribeToCloseEvent();
  }

  onDestroy() {
    this.alive = false;
  }
}
