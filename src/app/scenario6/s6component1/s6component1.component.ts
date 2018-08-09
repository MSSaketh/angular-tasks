import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-s6component1',
  templateUrl: './s6component1.component.html',
  styleUrls: ['./s6component1.component.css']
})
export class S6component1Component implements OnInit {

  msg:string;

  constructor(private data:AppService) { }

  ngOnInit() {
this.data.currentMessage.subscribe(msg => this.msg = msg);
  }

}
