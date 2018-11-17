import { Component, OnInit } from '@angular/core';
import { switchMap, takeWhile, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditWindowDialogComponent } from './edit-window-dialog/edit-window-dialog.component';
import { Student } from 'src/app/shared/models/student.interface';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  selectedStudent: Student;
  alive: boolean;
  dialogRef: MatDialogRef<EditWindowDialogComponent>;
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.subscribeToStudent();
  }

  subscribeToStudent() {
    this.route.paramMap.pipe(
      switchMap(pmap => this.databaseService.getStudentInformation(pmap.get('id')))
   )
    .subscribe(student => {
      this.selectedStudent = student;
    });
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
