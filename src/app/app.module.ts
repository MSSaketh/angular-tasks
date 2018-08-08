import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { S1componentComponent } from './scenario1/s1component/s1component.component';
import { S2componentComponent } from './scenario2/s2component/s2component.component';
import { S3component1Component } from './scenario3/s3component1/s3component1.component';
import { S3component2Component } from './scenario3/s3component1/s3component2/s3component2.component';




@NgModule({
  declarations: [
    AppComponent,
    S1componentComponent,
    S2componentComponent,
    S3component1Component,
    S3component2Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
