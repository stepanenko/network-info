
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  studentsRef: AngularFireList<any>;
  students: Observable<any[]>;
  displayedColumns: string[] = ['image', 'name'];
  studentsList: MatTableDataSource<any>;
  activeStudent: string;
  searchKey: string;

  @Output() clickOnStudent = new EventEmitter();

  constructor(private db: AngularFireDatabase) {}

    ngOnInit() {

      this.studentsRef = this.db.list('students');
      this.studentsRef.snapshotChanges().subscribe(
        students => {
          const array = students.map(student => {
            return {
              key: student.key,
              ...student.payload.val()
            };
          });
          this.studentsList = new MatTableDataSource(array);
        }
      );

  }

  onTableRowClick(key) {
    this.activeStudent = key;
    this.clickOnStudent.emit(key);
  }

  applyFilter() {
    this.studentsList.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

}
