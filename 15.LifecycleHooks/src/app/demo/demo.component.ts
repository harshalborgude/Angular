import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,
OnDestroy {

  @Input("inputValue") inputValue:String = "demo";

  // however time we add child component in parent html file , that many times constructor will called and component 
	// 		will be added in DOM.
	// by the time constructor called , input binded properties (inputValue) are not initialized with binded input values.
	// inputValue property will be there, will have it's predefined value ,  but the value coming from parent component 
	// will not be assigned to inputValue property.
  constructor() { 
    console.log("constuctor called!");
    // console.log("constructor inputValue :"+this.inputValue);
  }

  // We can implement "OnChanges" interface for using "ngOnChanges" , its not mandatory but it's a good practice. 
  // only hook which takes argument of type "SimpleChanges"
  // gets called after constructor.
  // SimpleChanges var logs input properties and there currentValue , previousValue and firstChange : true/false
  // ngOnChanges will get called when input bound proeprty chages,if change in previousValue and currentValue.Otherwise it will not called,
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    // console.log(changes);
    // console.log("ngOnChanges inputValue :"+this.inputValue);
  }


  // ngOnInit get called after constructor called.
	// the input bound property (InputValue) was not initialized before constructor, but by the time ngOnInit get called ,
	// 		 Those input bound properties have been initialized with the value from app component (parent component).
	// So ngOnInit is the perfect place to add any initialization logic.
  ngOnInit(): void { 
    console.log("ngOnInit called!");
    // console.log("ngOnInit inputValue :"+this.inputValue);
  }

  // can import "DoCheck" interface (Optional)
  // whenever there is any change then ngDoCheck will get called.
  // ngDoCheck get called for every change detection cycle.
  ngDoCheck(){
    console.log("ngDoCheck called!");
  }

  // can import "AfterContentInit" (optional)
  // When projected content is initialized then ngAfterContentInit get's called,
  // projected content means content of <ng-content></ng-content> from parent component.
  // It will only get called during first change detection cycle.After that will not get called.
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
  }

  // can import "AfterContentChecked" (optional)
  // ngAfterContentChecked get's called for each change detection cycle.
  // Also get called when projected content changes (<ng-content></ng-content>).
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }

  // can import "AfterViewInit" (optional)
  // get called when it's view and child's view get's fully initialized.
  // Get called only once during the first change detection cycle.
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
  }

  // can import "AfterViewChecked" (optional)
  // get's called for every change detection cycle.
  // It get's called for the every change in the view.
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  // can import "OnDestroy" (optional)
  // When demo component will be removed from DOM based on the *ngIf="showDemoComp" condition in app compnent,
  //    then this ngOnDestroy method will get called.
  // this is the best place to do some cleanup work. 
  ngOnDestroy(){
    console.log("ngOnDestroy called!");
  }

  demoInputValue:string = "";
  setDemoInputValue(demoInput : HTMLInputElement){
    this.demoInputValue = demoInput.value;
    // console.log("demoInput :"+this.demoInputValue);
  }


}
