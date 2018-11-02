import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from './models/student.interface';
import { StudentListItem } from './models/student-list-item.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private service: StudentsService,
    private router: Router) { }

  shortStudentsData: StudentListItem[] = []

  studentChange$ = new Subject<number>()
  tabChange$ = new BehaviorSubject<string>('profile')

  tabs = [
    {label: "Profile",  path: "profile"},
    {label: "Chart",    path: "chart"},
    {label: "Academic", path: "academic"},
    {label: "Reports",  path: "reports"}
  ]

  ngOnInit() {
    this.service.getStudentsLessInfo()
      .subscribe(data => { this.shortStudentsData = data })

    combineLatest(this.studentChange$, this.tabChange$)
      .subscribe(([id, tab]) => {
        this.router.navigate(['/students', id, tab])
      })
  }

}
