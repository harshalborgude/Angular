import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBackground {

    // here behind the scene angular will create a private property "element" and will assign that input property
        // of constructor to it and it will be accessible throughout the class.SO declaration and assignment taken 
        // care by angular if we use "private" keyword in construtor.
    // private element:ElementRef;

    constructor(private element:ElementRef) {  
        // element.nativeElement.style.backgroundColor = "green";  // should be written in ngOnInit()
        // this.element = element;
    }  

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = "green";  
    }

}






