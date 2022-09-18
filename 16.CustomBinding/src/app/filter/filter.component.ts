import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('all') all:number=0;
  @Input('free') free:number=0;
  @Input('premium') premium:number=0;

  selectedRadioButtonValue:string = "All"; 

  @Output()
  filterRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    console.log("selectedRadioButtonValue child:"+this.selectedRadioButtonValue);
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
