import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-s6component2',
  templateUrl: './s6component2.component.html',
  styleUrls: ['./s6component2.component.css']
})
export class S6component2Component implements OnInit {

  msg:string;

  constructor(private data:AppService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.msg = msg);
  }

  newMessage(){
    this.data.changeMessage('sibling component');
  }

}
