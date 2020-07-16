import { Component,OnInit,ElementRef , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //Child to parent communication
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
   }

  //Lifecycle hook
  
  /*Called once , after this component is first displayed and after angular has set any properties passed down from parent component */
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
    //console.log('Leaving Modal');
  }

  onCloseClick(){
    this.close.emit();
    
  }
}
 