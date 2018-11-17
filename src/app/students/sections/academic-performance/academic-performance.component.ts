import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-academic-performance',
  templateUrl: './academic-performance.component.html',
  styleUrls: ['./academic-performance.component.scss']
})
export class AcademicPerformanceComponent implements OnInit {

  filterStr = '';
  info$: Observable<any>;

  colums = [
    { key: 'subject', header: 'Course'},
    { key: 'marks', header: 'Grade'},
    { key: 'attendance', header: 'Attendaces'}
  ];

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.info$ = this.studentService.selectedStudent$.pipe(
      map(({subjects}) => subjects),
      map((obj = {}) => Object.keys(obj).map(key => ({subject: key, ...obj[key]})))
    );
  }

  applyFilter(value: any) {
    this.filterStr = value;
  }
}
