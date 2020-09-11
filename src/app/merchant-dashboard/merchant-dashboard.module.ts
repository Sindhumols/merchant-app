import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports:      [ FormsModule,ChartModule , ReactiveFormsModule, CommonModule ],
})

export class MercahntDashboardModule {
  
}