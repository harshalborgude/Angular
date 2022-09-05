import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-dir',
  templateUrl: './class-dir.component.html',
  styleUrls: ['./class-dir.component.css']
})
export class ClassDirComponent {

  marks:number = 30;
  myclass:string = "";

  constructor(){
    if(this.marks>=70){
      this.myclass = "class1";  // class1 is a css class , contain bunch of properties.
    }else {
      this.myclass = "class2";   // class2 is a css class , contains bunch of properties.
    }
  }

}
