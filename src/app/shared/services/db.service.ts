import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/shared/models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  getStudent(id: string): Observable<Student> {
    return this.db.object<Student>(`students/${id}`).valueChanges();
  }

  getStudentGrades(studentID) {
    return this.db.list(`students/${studentID}/subjects`).valueChanges();
  }

  getStudentsList() {
    return this.db.list('students').snapshotChanges().pipe(
      map(students => students.map(({ payload }) => ({
          key: payload.key,
          ...payload.val()
      })))
    );
  }

  updateSelectedStudent(id, selectedStudent) {
    this.db.object(`students/${id}`).update({
      ...selectedStudent,
      group: {name: selectedStudent.group},
    });
  }
}
