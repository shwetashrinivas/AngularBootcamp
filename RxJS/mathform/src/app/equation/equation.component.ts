import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay,filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  secondsPerSolution= 0;

  mathForm = new FormGroup ({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },
  [ MathValidators.addition('answer' , 'a' ,'b')
    
  ]);

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  } 
  
  get b() {
    return this.mathForm.value.b;
  }

  //RxJS Pipe
  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter( value => value === 'VALID'),
      delay(100),
      scan((acc) => {
        return{
          numberSolved: acc.numberSolved +1,
          startTime: acc.startTime
        }
      },{ numberSolved: 0, startTime: new Date() })
    ).subscribe(({numberSolved,startTime}) => {
      this.secondsPerSolution = (
        new Date().getTime() - startTime.getTime()
      ) / numberSolved /1000;

      this.mathForm.setValue({
      a: this.randomNumber(),
      b: this.randomNumber(),
      answer: ''
     }); 
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

//Notes
/*  1. setValue can be used if we need to update all the properties.
    2. We can use patchValue if we wanted to update only some of the properties   
    3. this.mathForm.controls.a.setValue(this.randomNumber());
       this.mathForm.controls.b.setValue(this.randomNumber());
       this.mathForm.controls.answer.setValue('');
    4. statusChanges is an Observable which emits the changes in the value whenever we change the formGroup.
    5. Solution without RxJS:

    ngOnInit(): void {
    const startTime = new Date();
    let numberSolved =0;
    this.mathForm.statusChanges.pipe(
      filter( value => value === 'VALID'),
      delay(100)
      },{ numberSolved: 0, startTime: new Date() })
    )..subscribe(() => {
      numberSolved++;
      this.secondsPerSolution = (
        new Date().getTime() - startTime.getTime()
      ) / numberSolved /1000;

      this.mathForm.setValue({
      a: this.randomNumber(),
      b: this.randomNumber(),
      answer: ''
     }); 
    });





*/