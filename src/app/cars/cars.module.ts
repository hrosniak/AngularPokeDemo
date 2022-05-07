import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared-module';


@NgModule({
  exports: [CarsListComponent],
  declarations: [
    CarsListComponent,
    TotalCostComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CarsModule { }
