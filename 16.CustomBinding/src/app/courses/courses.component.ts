import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.filteredCourses = this.filterCourses();
   }

  courses=[
    {id:"101",name:"javaScript",price:100,type:"free"},
    {id:"102",name:"java",price:200,type:"premium"},
    {id:"103",name:"TypeScript",price:300,type:"free"},
    {id:"104",name:"SpringBoot",price:800,type:"premium"},
    {id:"105",name:"sql",price:200,type:"free"},
    {id:"106",name:"microservices",price:400,type:"premium"},
    {id:"107",name:"html",price:900,type:"premium"}
  ]

  // to get total course , need value in filter component, its a child component.
  getTotalCourses(){
    return this.courses.length;
  }

  // to get total free course , need value in filter component, its a child component.
  getTotalFreeCourses(){
    return this.courses.filter(course=>course.type === "free").length;
  }

  // to get total premium course , need value in filter component, its a child component.
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === "premium").length;
  }

  // to filter based on radio button selection , default all.
  courseCountRadioButton: string ="all";

  // if Radio Button change event raised in child component , value comes here and assign to "courseCountRadioButton" value.
  onFilterRadioButtonChanged(data:string){
    this.courseCountRadioButton = data.toLowerCase();
    console.log("courseCountRadioButton parent:"+this.courseCountRadioButton);

  }

  // FOr the text from search box , it will come from search component which is a child component
  searchText:string="";

  // On the search button press , child will raise event , and through event binding in parent , value will be assigned here.
  // trim have used to remove white spaces.
  searchCourses(searchText:string){
    this.searchText = searchText.trim();
    console.log("searchText :"+this.searchText);
  }

  

}
