import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { RotatedBarChartComponent } from './rotated-bar-chart/rotated-bar-chart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RotatedBarChartComponent
  ],
  exports:[
    NavbarComponent,
    RotatedBarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
