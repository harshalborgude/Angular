import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-ngforobject',
  templateUrl: './ngforobject.component.html',
  styleUrls: ['./ngforobject.component.css']
})
export class NgforobjectComponent implements OnInit {

  emps:Employee[] = [
      new Employee(101,'Ram',10000),
      new Employee(102,'Gita',20000),
      new Employee(103,'Rahim',30000),
  ];

  ngOnInit(): void {
  }

}
