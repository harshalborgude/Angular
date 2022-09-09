import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})
export class BuiltInPipeComponent implements OnInit {

  whatDate:string = "";
  text:string = "";

  constructor() { }

  ngOnInit(): void {
      this.whatDate = new Date().toDateString();
      this.text = "Hello WOrld!";
      console.log("whatDate :"+this.whatDate);
  }

}
