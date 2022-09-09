import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component {

  title = '9.FormsApp';

  fname:string = "";
  lname:string = "";
  email:string = "";
  msgColor:string = "";

  msg:string = "";

  saveUser(f:any){

    if(f.valid){
      this.msg = "User Saved Successfully!";
      this.msgColor = "green";
    }else{
      this.msg = "Invalid Data!";
      this.msgColor = "red";
    }
    
  }

}
