import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input("defaultColor") defaultColor:string = "transparent";
  @Input("highlighColor") highlighColor: string = "pink";

  // internally value of "background" property value will be assigned to "style.background" property of host
  @HostBinding('style.backgroundColor') background:string = this.defaultColor;
  @HostBinding('style.border') border:string ="none";

  ngOnInit(){
    this.background = this.defaultColor;
  }

  // on mouseenter event , background and border will get set to this values
  @HostListener("mouseenter")
  mouseEnter(){
    this.background = 'yellow';
    this.border = "red 2px solid";
  }

  // on mouseleave event , background and border will get set to this values
  @HostListener("mouseleave")
  mouseLeave(){
    this.background = this.highlighColor;
    this.border = "none";
  }



}
