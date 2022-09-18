import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './Student';

@Pipe({
  name : 'genderFilter',
  pure : true
  // pure : false
})
export class genderFilterPipe implements PipeTransform {

  transform(students:Student[],filterText:string){
    console.log("genderFilterPipe called!")
    if(students.length === 0 || filterText === ''){
      return students;
    } else{
      return students.filter((student)=>{
        return student.gender.toLocaleLowerCase()===filterText.toLocaleLowerCase()
      })
    }

  }

}
