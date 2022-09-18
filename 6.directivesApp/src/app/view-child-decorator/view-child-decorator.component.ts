import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemoForViewChildComponent } from '../demo-for-view-child/demo-for-view-child.component';

@Component({
  selector: 'app-view-child-decorator',
  templateUrl: './view-child-decorator.component.html',
  styleUrls: ['./view-child-decorator.component.css']
})
export class ViewChildDecoratorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  @ViewChild('dobInput') dateOfBirth:ElementRef |undefined;
  @ViewChild('ageInput') age : ElementRef |undefined;
  @ViewChild(DemoForViewChildComponent, { static: true })
  demoComp!: ElementRef;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    // this.age.nativeElement.value = age;
    console.log("age :"+age);

  }


}
