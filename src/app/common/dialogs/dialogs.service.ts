import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.interface';
import { User } from 'src/app/auth/user.interface';
import { Advertisements } from 'src/app/home/advertisements/advertisements.interface';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';


@Injectable()
export class DialogsService {

  constructor(private matDialog: MatDialog) { }

  openDialog(component, title, data) {
    return this.matDialog.open(
      component,
      {
        disableClose: true,
        autoFocus: true,
        width: '600px',
        data: { title, data }
      }
    ).afterClosed();
  }

  openEditStudentDialog({
    student = {},
    title = 'Edit student',
  } = {}): Observable<Student | null> {
    return this.openDialog(EditStudentComponent, title, student);
  }

  openEditUserDialog({
    user = {},
    title = 'Edit user',
  } = {}): Observable<User | null> {
    return this.openDialog(EditUserComponent, title, user);
  }

  openEditAdvertisementDialog({
    advertisement = {},
    title = 'Edit Advertisement',
  } = {}): Observable<Advertisements | null> {
    return this.openDialog(EditAdvertisementComponent, title, advertisement);
  }
}
