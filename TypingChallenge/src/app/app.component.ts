import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

randomText = lorem.sentence();

//approach 1 for conditional display of "SUCCESS"

enteredText = '';
onInput(value: string){
  this.enteredText = value;
}

//approach 2 for conditional display of "SUCCESS"
solved = false;
onInput1(value:string){
  if( value === this.randomText){
    this.solved =true;
  }
}


compare(randomLetter: string , enteredLetter:string ){
  if(!enteredLetter){
    return 'pending';
  }
return randomLetter === enteredLetter ? 'correct' : 'incorrect';

}
}
