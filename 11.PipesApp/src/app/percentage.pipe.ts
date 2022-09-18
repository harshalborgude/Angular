import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage'
})
export class percentagePipe implements PipeTransform{

    // toFixed method will fixed the decimal points
    transform(value: number, totalMarks:number, decimal:number) {
       return ((value/totalMarks) *100).toFixed(decimal);
    }

}


