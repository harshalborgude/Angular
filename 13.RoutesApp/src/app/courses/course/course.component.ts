import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:any;
  courseId:any;

  routeParamObservable: Subscription | undefined;

  constructor(private activatedRoute:ActivatedRoute) {  }
  ngOnInit(): void { 
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.courseId = this.activatedRoute.snapshot.params['id'];

    // getting courseId using observable.

    
    this.routeParamObservable = this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
    })

  }

  ngOnDestroy(){
    this.routeParamObservable?.unsubscribe();
  }



}
