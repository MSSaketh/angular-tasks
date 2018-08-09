import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S4component1Component } from './s4component1/s4component1.component';
import { S4component2Component } from './s4component1/s4component2/s4component2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [S4component1Component, S4component2Component]
})
export class Scenario4Module { }
