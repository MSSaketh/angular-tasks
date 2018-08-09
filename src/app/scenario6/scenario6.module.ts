import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S6component1Component } from './s6component1/s6component1.component';
import { S6component2Component } from './s6component2/s6component2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [S6component1Component, S6component2Component]
})
export class Scenario6Module { }
