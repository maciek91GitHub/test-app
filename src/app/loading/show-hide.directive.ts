import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective {

  constructor(private element: ElementRef) { }

  show(isShow) {
    this.element.nativeElement.style.display = isShow ? 'block' : 'none';
  }

}
