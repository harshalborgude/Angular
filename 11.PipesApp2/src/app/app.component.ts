import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { StudentService } from './Student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{

  marks = 200;
  totalMarks = 400;

  students:Student[]=[];
  filterText:string="";
  filteredStudents:Student[] =[];
  filterText2:string="";
  
  totalStudents = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.students.length);
    },7000);
  })

  constructor(private studentService:StudentService){ }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
    this.filteredStudents = this.students;
  }

  filterForGender(){
    console.log("filterText :"+this.filterText);
  }

  // if we are adding any new object to students object , this will be impure change to pipe as array reference is same , so pipe will not be called.
  // So here pure "genderFilter" pipe will not called , as its "pure pipe" and change is impure.
  onAddStudent(){
    this.students.push({name:"harshal7 (added)",gender:"male"})
  }

  // This will be considered as pure change , as change in reference.
  /* onAddStudent(){
      let studentCopy = Object.assign([],this.students);
      studentCopy.push({name:"harshal7",gender:"male"});
      this.students = studentCopy;
   }*/

   // This will change gender of 1st student , pure pipe can not detect it.
   onChangeGenderClick(){
      this.students[0].name = "harshal - changed"
      this.students[0].gender= "Female";
  }

  // To filter data inside component only , without using pipe.
  filterStudentByGenders(){
    console.log("filterWithGenders - filterText :"+this.filterText2);
    if(this.students.length === 0 || this.filterText2.length === 0){
      Object.assign(this.filterForGender,this.students);
    } else {
      this.filteredStudents= this.students.filter((student)=>{
                              return  student.gender.toLowerCase() === this.filterText2.toLowerCase()
                            })
    }
    
  }

}
