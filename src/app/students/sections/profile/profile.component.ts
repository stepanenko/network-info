import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';
import { switchMap, takeWhile, filter } from 'rxjs/operators';
import { StudentsService } from '../../../students/students.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditWindowDialogComponent } from './edit-window-dialog/edit-window-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  selectedStudent: Student;
  students: Student[];
  alive: boolean;
  imgUrl: string;
  dialogRef: MatDialogRef<EditWindowDialogComponent>;
  avatar;
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.subscribeToStudent();
  }

  subscribeToStudent() {
    this.route.paramMap.pipe(
      switchMap(pmap => this.studentsService.getStudent(pmap.get('id')))
   )
    .subscribe(student => {
      this.selectedStudent = student;
      this.getAvatar();
    });
  }

  getAvatar() {
    this.studentsService.getAvatar(this.selectedStudent.id)
      .subscribe((data) => this.avatar = data);
  }

  rewriteStudentObject(result) {
    this.selectedStudent = result;
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
      ).subscribe(value => this.rewriteStudentObject(value));
  }

  onEditClick() {
    this.openDialog();
    this.subscribeToCloseEvent();
  }

  onDestroy() {
    this.alive = false;
  }
}
