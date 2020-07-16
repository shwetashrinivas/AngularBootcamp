import { Directive, ElementRef ,Input} from '@angular/core';

@Directive({
  selector: '[appClassdir]'
})
export class ClassdirDirective {

  //@Input() backgroundColor: string;
  
  /*  constructor(private element: ElementRef) {
    console.log('Class Directive used!')
  
    this.element.nativeElement.style.backgroundColor = "orange";
  
    //Never do this!!
    setTimeout(() => {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
      },50); 
  }
*/
constructor(private element: ElementRef) {}

// way 1 using custom directives
@Input() set backgroundColor(color: string){
   this.element.nativeElement.style.backgroundColor = color;
  }
}

// way 2 using custom directives
/*
@Input() set appClassdir(color: string){
   this.element.nativeElement.style.backgroundColor = color;
  }
}
*/

// way 3 using custom directives
/*
@Input('appClass) set backgroundColor(color: string){
   this.element.nativeElement.style.backgroundColor = color;
  }
}
*/

// way 4 using custom directives by replacing ngClass with structural directives
/*
@Input('appClass) set className(classObj: any){
    for(let key in classObj){
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else{
                this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
*/
