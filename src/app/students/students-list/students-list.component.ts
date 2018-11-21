
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  studentsList: MatTableDataSource<any>;
  searchString: string;
  activeStudent: string;
  displayedColumns: string[] = ['image', 'name'];

  @Input() incomeList: any[];
  @Output() clickOnStudent = new EventEmitter();

  constructor() {}

  ngOnInit() {

    this.studentsList = new MatTableDataSource(this.incomeList);

    this.studentsList
      .filterPredicate = (value, filter: string): boolean => {
        return value.name.toLowerCase().includes(filter) ||
        value.surname.toLowerCase().includes(filter);
      };

    this.onTableRowClick(this.incomeList[0].key);

  }

  onTableRowClick(key) {
    this.activeStudent = key;
    this.clickOnStudent.emit(key);
  }

  applyFilter(filterValue: string) {
    this.searchString = filterValue;
    this.studentsList.filter = filterValue.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchString = '';
    this.applyFilter('');
  }

}
