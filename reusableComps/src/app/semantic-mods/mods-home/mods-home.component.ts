import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items= [
    { title: 'Aasman hai neela kyun' , content: 'Kyuki saans bhi kabhi bahu thi'},
    { title: 'Pani gila gila kyun' , content: 'liquid hai'},
    { title: 'Gol Kyun Hai Zameen' , content: 'qki square nahi hai'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
