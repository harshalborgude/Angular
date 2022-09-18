import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage'
})
export class percentagePipe implements PipeTransform{

    transform(value: number, totalMarks:number, decimal:number) {
        console.log("Percentage pipe called!")
       return ((value/totalMarks) *100).toFixed(decimal);
    }

}


