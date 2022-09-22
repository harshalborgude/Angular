import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private element:ElementRef,private renderer : Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','Red');
    this.renderer.addClass(this.element.nativeElement,'directiveDemo');
    this.renderer.setAttribute(this.element.nativeElement,'title','This is example of setAttribut using rendere2');
  }
}
