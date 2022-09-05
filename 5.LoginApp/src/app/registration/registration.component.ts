import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username:string = "";
  password:string = "";
  confirmpassword:string = "";
  gender:string = "";
  country:string = "";
  msg:string = "";

  CheckRegistractionDetails(){

    // Logic to store data in DB , via calling Rest API

    console.log("username :"+this.username+" ,password :"+this.password+" ,confirmpassword :"+this.confirmpassword
      +" ,gender :"+this.gender+" ,country :"+this.country);

    this.msg = "Registration Sucessfull!";
    alert(this.msg);
  }

}
