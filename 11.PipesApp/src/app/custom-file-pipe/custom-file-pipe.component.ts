import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-file-pipe',
  templateUrl: './custom-file-pipe.component.html',
  styleUrls: ['./custom-file-pipe.component.css']
})
export class CustomFilePipeComponent implements OnInit {

  file = {name : 'logo.png', size:2120109 , type:'image/png'};
  
  constructor() { }

  ngOnInit(): void {
  }

}
