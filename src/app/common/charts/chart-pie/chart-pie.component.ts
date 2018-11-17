import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {
  @ViewChild('pieChart') private chartRef;
  @Input() private data: any;
  @Input() private labels: any;
  @Input() private backgroundColor: any;
  chart: any;

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'pie',
      data: {
        datasets: [{
          data: this.data,
          backgroundColor: this.backgroundColor,
          label: 'Dataset 1'
        }],
        labels: this.labels
      },
      options: {
        responsive: true
      }
    });
  }
}
