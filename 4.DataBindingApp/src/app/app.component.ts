import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // msg:string = "Welcome To Angular framework!";  // interpolation

  name:string = "John";
  age:number = 25;

  handleSubmitBtn(){
    this.name = "Smith";
    this.age = 30;
  }

}
