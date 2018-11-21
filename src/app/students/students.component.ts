import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { find } from 'lodash/fp';
import { map } from 'rxjs/operators';

import { StudentsService } from './students.service';
import { DatabaseService } from '../shared/services/db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private router: Router,
    private service: StudentsService,
    private dbService: DatabaseService) { }

  selectedLabel$: Observable<string>;
  tabChange$ = new BehaviorSubject<string>('profile');
  listData: any[];

  tabs = [
    {label: 'Profile',  path: 'profile'},
    {label: 'Chart',    path: 'chart'},
    {label: 'Academic', path: 'academic'},
    {label: 'Reports',  path: 'reports'}
  ];

  ngOnInit() {
    combineLatest(this.service.studentChange$, this.tabChange$)
      .subscribe(([id, tab]) => {
        this.router.navigate(['/students', id, tab]);
    });

    this.selectedLabel$ = this.tabChange$.pipe(
      map(path => find({path}, this.tabs).label)
    );

    this.getStudents();
  }

  getStudents() {
    this.dbService.getStudentsList()
      .subscribe(data => this.listData = data);
  }

  listClicked(id: string) {
    this.service.selectStudent(id);
  }

  tabClicked(label: string) {
    this.tabChange$.next(label);
  }
}
