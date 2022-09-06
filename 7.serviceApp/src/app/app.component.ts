import { Component, Inject } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[]
})
export class AppComponent {

  welcomeMsg:string = "";

  // Here angular will inject instance of WelcomeService class.
  constructor(@Inject(WelcomeService) private welService:WelcomeService){ }

  getMsg():void{
    this.welcomeMsg = this.welService.getWelcomeMsg("App");
  }

}
