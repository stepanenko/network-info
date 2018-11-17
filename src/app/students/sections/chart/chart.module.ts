import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartPieComponent } from 'src/app/common/charts/chart-pie/chart-pie.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartComponent,
    ChartPieComponent
  ]
})
export class ChartModule { }
