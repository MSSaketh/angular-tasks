import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3component1Component } from './s3component1/s3component1.component';
import { S3component2Component } from './s3component1/s3component2/s3component2.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [S3component1Component, S3component2Component]
})
export class Scenario3Module { }
