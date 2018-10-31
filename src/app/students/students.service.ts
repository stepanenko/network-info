import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Student } from '../students/models/student.interface'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.baseUrl);
    }

  getStudent(id: string): Observable<Student>{
    return this.getStudents().pipe(
      map(allSudents => allSudents.find(student => student.id === +id) 
      )
    )
  }

  getImage(id: number){
    return `../../assets/images/students-avatars/student${id}.png`;
  }
}
