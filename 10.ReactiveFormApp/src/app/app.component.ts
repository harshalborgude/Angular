import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '10.ReactiveFormApp';

  msg:string = "";
  myForm : FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
    });
  }

  onSubmit(){
    this.msg = "User Saved!"
  }

}
