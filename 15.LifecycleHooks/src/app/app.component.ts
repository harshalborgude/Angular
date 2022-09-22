import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '15.LifecycleHooks2';

  inputValue:string="";
  showDemoComp : boolean = true;

  setInputValue(input : HTMLInputElement){
    this.inputValue = input.value;
  }

  OnDestroyDemo(){
    this.showDemoComp = false;
  }

}
