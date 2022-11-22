import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void { }

  navigateToHome(){ 
    // this.route.navigate(['Home']);       // This is considered as a absolute path but using provided routes.
    // this.route.navigateByUrl("Home");   // This is considered as a absolute path but using url

     // here it will take current activated path and will append provided path.
    this.route.navigate(['Home'],{relativeTo:this.activatedRoute});    
    
  
  }

}
