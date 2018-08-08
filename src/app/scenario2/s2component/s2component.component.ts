import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s2component',
  templateUrl: './s2component.component.html',
  styleUrls: ['./s2component.component.css']
})
export class S2componentComponent implements OnInit {

  onClick(_name){
    console.log(_name);
    
  }


  constructor() { }

  ngOnInit() {
  }

}
