import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //Input Aliasing
  @Input('class') className= '';

 // @Input() className= '';
  @Input() data =[];
  @Input() headers =[];

  constructor() { }

  ngOnInit(): void {
  }

}
