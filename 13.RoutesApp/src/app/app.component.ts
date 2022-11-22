import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '13.RoutesApp';

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value)=>{
      console.log(value);
      this.jumpTo(value);
    })
  }

  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

}
