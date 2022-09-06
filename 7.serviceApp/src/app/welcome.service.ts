import { Injectable } from '@angular/core';
import { mergeScan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  msg:string ="";

  constructor() { }

  getWelcomeMsg (msg:string):string{
     this.msg = "Welcome To Angular world harshal - from "+msg+" component!";

    return this.msg;
  }
}
