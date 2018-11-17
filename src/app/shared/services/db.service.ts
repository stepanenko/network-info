import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
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

  getStudentInformation(studentID): Observable<Student> {
    return this.db.object<Student>(`students/${studentID}`).valueChanges();
  }

  getStudentGrades(studentID) {
    return this.db.list(`students/${studentID}/subjects`).valueChanges();
  }
}
