import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  constructor(){
    this.password = '';
  }

  onChangeLength(value: string){
    const parsedvalue = parseInt(value);
    if (!isNaN(parsedvalue)){
      this.length = parsedvalue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbol(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
  // console.log('Button was clicked');
  // console.log(this.includeLetters);
  // console.log(this.includeNumbers);
  // console.log(this.includeSymbols);
  /* console.log(`
   About to generate the password with the following:
   Includes letters: ${this.includeLetters}
   Includes numbers: ${this.includeNumbers}
   Includes symbols: ${this.includeSymbols}
   `);*/
  // this.password= 'My Password';

const numbers = '1234567890';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*()';

let validChars = '';
if(this.includeLetters){
  validChars += letters; 
}
if(this.includeNumbers){
  validChars += numbers; 
}
if(this.includeSymbols){
  validChars += symbols; 
}

let generatedPassword = '';
for(let i =0;i<this.length;i++){
  const index = Math.floor(Math.random() * validChars.length);
  generatedPassword+= validChars[index];
   }

this.password = generatedPassword;
  }

}
