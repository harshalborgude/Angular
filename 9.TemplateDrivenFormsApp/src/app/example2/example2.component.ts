import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {


  onSubmit(form : NgForm){
    console.log(form);
  }

}
