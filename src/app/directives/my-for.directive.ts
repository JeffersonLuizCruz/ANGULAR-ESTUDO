import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyForDirective implements OnInit{

  @Input('myForCom') numbers: number[];

  constructor(private container: ViewContainerRef,
              private tamplete: TemplateRef<any>) { }

  ngOnInit():void{

    for(let number of this.numbers){
      this.container.createEmbeddedView(this.tamplete, {$implicit: number});
    }

  }

}
