import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-s4component2',
  templateUrl: './s4component2.component.html',
  styleUrls: ['./s4component2.component.css']
})
export class S4component2Component implements OnInit {


  @Output() displayData = new EventEmitter();
  private msg:string;

  constructor() { }

  onChange(data:string){
    this.msg=data;
    this.displayData.emit(this.msg);
  }

  ngOnInit() {
  }

}
