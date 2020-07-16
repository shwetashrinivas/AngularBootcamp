import { Directive,TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any> 
    )
    {

    }

  @Input('appDuplicate') set render(times: number){
    this.viewContainer.clear();
    for(let i = 0; i < times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        // Context Object
        index: i 
      });
    }
  }

}
