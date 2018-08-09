import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s4component1',
  templateUrl: './s4component1.component.html',
  styleUrls: ['./s4component1.component.css']
})
export class S4component1Component implements OnInit {

  constructor() { }

  @Input() ParentMessage:string;

  ngOnInit() {
  }

}
