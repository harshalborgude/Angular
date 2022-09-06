import { Component, Inject, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component  {

  welcomeMsg:string = "";

  // Here angular will inject instance of WelcomeService class.
  constructor(@Inject(WelcomeService) private welService:WelcomeService){ }

  getMsg():void{
    this.welcomeMsg = this.welService.getWelcomeMsg("Comp2");
  }

}
