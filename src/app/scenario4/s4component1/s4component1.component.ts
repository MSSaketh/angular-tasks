import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
// import { S4component2Component } from  '../s4component1/s4component2/s4component2.component';

@Component({
  selector: 'app-s4component1',
  templateUrl: './s4component1.component.html',
  styleUrls: ['./s4component1.component.css']
})
export class S4component1Component implements OnInit {

  private data:string;

  constructor() { }

  displayData(data:string) {
        this.data=data;
  }
  // @Input() ParentMessage:string;
  

  ngOnInit(){}
  // @ViewChild(S4component2Component) child; 

  // ParentMessage:any;

  // ngAfterViewInit() {
  //   this.ParentMessage = this.child._name;
  // }

}
