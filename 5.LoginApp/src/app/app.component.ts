import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:string = "";
  password:string = "";
  msg:string = "";

  CheckLogin(){
    console.log("user :"+this.username+" ,pass :"+this.password);
    if(this.username=="admin" && this.password =="admin123"){
      this.msg = "Valid Credentials!";
    }else {
      this.msg = "Invalid Credentials!"; 
    }
    console.log("msg :"+this.msg);
  }


}
