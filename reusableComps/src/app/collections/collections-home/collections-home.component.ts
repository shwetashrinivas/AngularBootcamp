import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  partOfLink = 'hi'
  
  data= [
    {name:'Shweta' , age:24 , job: 'Developer', employeed: true },
    {name:'Smita' , age:21 , job: 'Designer',employeed: false  },
    {name:'Devyanshu' , age:24 , job: 'Engineer',employeed: true  },
  ];

  //Array of objects to only display what we need
  // I dont need to display employeed column
  headers = [
    { key:'name', label: 'Name'},
    { key:'age', label: 'Age'},
    { key:'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
