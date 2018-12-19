import { Component, OnInit } from '@angular/core';
import { COLORS } from './chart.config';
import { map, mean, keys, mapValues } from 'lodash/fp';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  avgMarks: Array<number>;
  avgAttendances: Array<number>;
  labels: Array<string>;
  colors: Array<string>;
  performance: {};

  constructor(
    private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.getPerformance()
    .subscribe(performance => this.generateData(performance));
    this.colors = COLORS;
  }

  generateData(perf) {
    const marks = map(term =>
      map(subj => subj.mark, term), perf);
    const attendances = map(term =>
      map(subj => subj.attendance, term), perf);
    this.avgMarks = map(mean, marks);
    this.avgAttendances = map(mean, attendances);
    this.labels = keys(perf);
  }
}
