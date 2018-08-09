import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S5component1Component } from './s5component1/s5component1.component';
import { S5component2Component } from './s5component1/s5component2/s5component2.component';
import { S5component3Component } from './s5component1/s5component2/s5component3/s5component3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [S5component1Component, S5component2Component, S5component3Component]
})
export class Scenario5Module { }
