import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email : string ='';

  /* constructor(){
    setInterval( () => {
      this.email += 'a';
    }, 1000); } */

  onSubmit(){
    console.log(this.email);
  }  
}
