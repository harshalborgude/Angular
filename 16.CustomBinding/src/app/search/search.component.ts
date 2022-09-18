import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchValue:string="";

  @Output()
  searchValueEmitter:EventEmitter<string> = new EventEmitter<string>();

  searchCourses(){
    this.searchValueEmitter.emit(this.searchValue);
  }

  ngOnInit(): void {
  }

}
