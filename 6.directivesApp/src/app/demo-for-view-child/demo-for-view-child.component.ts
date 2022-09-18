import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-for-view-child',
  templateUrl: './demo-for-view-child.component.html',
  styleUrls: ['./demo-for-view-child.component.css']
})
export class DemoForViewChildComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }


  sayHello(){
    console.log("Hello from DemoForViewChildComponent class!");
  }


}
