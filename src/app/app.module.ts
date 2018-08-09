import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { S1componentComponent } from './scenario1/s1component/s1component.component';
import { S2componentComponent } from './scenario2/s2component/s2component.component';
import { S3component1Component } from './scenario3/s3component1/s3component1.component';
import { S3component2Component } from './scenario3/s3component1/s3component2/s3component2.component';
import { S4component1Component } from './scenario4/s4component1/s4component1.component';
import { S4component2Component } from './scenario4/s4component1/s4component2/s4component2.component';
import { S5component1Component } from './scenario5/s5component1/s5component1.component';
import { S5component2Component } from './scenario5/s5component1/s5component2/s5component2.component';
import { S5component3Component } from './scenario5/s5component1/s5component2/s5component3/s5component3.component';




@NgModule({
  declarations: [
    AppComponent,
    S1componentComponent,
    S2componentComponent,
    S3component1Component,
    S3component2Component,
    S4component1Component,
    S4component2Component,
    S5component1Component,
    S5component2Component,
    S5component3Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
