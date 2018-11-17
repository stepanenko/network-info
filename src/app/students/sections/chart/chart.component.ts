import { Component, OnInit } from '@angular/core';
import { LABELS, BACKGROUND_COLORS } from './chart.config';
import { map, range } from 'lodash/fp';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: Array<any>;
  labels: Array<any>;
  backgroundColor: Array<any>;

  ngOnInit() {
    this.generateData();
  }

  generateData() {
    this.data = map(() => Math.round(Math.random() * 100))(range(0, 5));
    this.labels = LABELS;
    this.backgroundColor = BACKGROUND_COLORS;
  }
}
