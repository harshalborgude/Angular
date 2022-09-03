import {Student} from './Student';

class School {

    students : Student[] = [
        new Student(101,"Harsh"),
        new Student(102,"Harsh1"),
        new Student(103,"Harsh2")
    ];
     
    display() : void {
        for(var i in this.students){
            console.log(this.students[i]);
        }
    }
}

let school:School = new School();
school.display();