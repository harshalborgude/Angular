import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {

    marks:number = 70;
    mycolor:string = "";

    constructor(){
      if(this.marks>=35){
        this.mycolor = "green";
      }else {
        this.mycolor = "red";
      }
    }

}
