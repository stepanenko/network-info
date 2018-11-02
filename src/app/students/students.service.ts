import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Student } from '../students/models/student.interface'
import { StudentListItem } from '../students/models/student-list-item.interface'
import { map } from 'rxjs/operators';
import { find, map as _map, pick } from 'lodash/fp';


@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.baseUrl);
  }

  getStudentsLessInfo(): Observable<StudentListItem[]> {
    return this.getStudents().pipe(
      map(_map(pick(['id', 'name', 'surname', 'group'])))
    )
  }

  getStudent(id: string): Observable<Student>{
    return this.getStudents().pipe(
      map(find(x => x.id === parseInt(id)))
    )
  }

  getImage(id: number){
    return `../../assets/images/students-avatars/student${id}.png`;
  }
}
