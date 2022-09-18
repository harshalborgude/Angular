import { Injectable } from "@angular/core";
import { Student } from "./Student";


@Injectable({
    providedIn: 'root'
})
export class StudentService {

    students:Student[]=[
        new Student("harshal","male"),
        new Student("harshal1","male"),
        new Student("harshal2","Female"),
        new Student("harshal3","male"),
        new Student("harshal4","Female")
      ];

    constructor(){ }

    getStudents(){
        return this.students;
    }


}


