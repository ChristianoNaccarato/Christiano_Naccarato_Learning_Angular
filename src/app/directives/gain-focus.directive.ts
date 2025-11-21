import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
})
export class GainFocusDirective {

  @Input() appHighlightOnFocus: string = 'blue';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.outline = `3px solid ${this.appHighlightOnFocus}`;
    this.el.nativeElement.style.scale = 1.2;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.scale = 'none';
    this.el.nativeElement.style.outline = 'none';
  }
}

