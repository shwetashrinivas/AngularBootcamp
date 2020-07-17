import { AbstractControl } from '@angular/forms';

//Custom Validator to check whether input provided by user is correct.
export class MathValidators {

    //Can't access an instance variable from a static method
    static addition(target: string, sourceOne: string , sourceTwo: string ) {

        return (formgrp: AbstractControl) => {
          const sum = formgrp.value[target];
          const num1 = formgrp.value[sourceOne];
          const num2 = formgrp.value[sourceTwo];

            if(num1 + num2 === parseInt(sum)){
             return null;
            }
            return { addition: true };
        };
    }
}


