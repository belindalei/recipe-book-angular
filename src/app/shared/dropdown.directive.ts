import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})

export class DropdownDirective {
  //@Hostbinding adds the css "open" class by binding to the property of the element
  @HostBinding('class.open') isOpen = false;

  //gives the dropdown the ability to close on a click from anywhere outside
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }
}
