import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {

  marks:number = 20;
  status:boolean = false;

  constructor() {

    if(this.marks >= 40){
      this.status = true;
    }else {
      this.status = false;
    }


  }

}
