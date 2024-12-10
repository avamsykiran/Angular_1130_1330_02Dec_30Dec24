import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input("appHighlight")
  colors!: any;
 
  constructor(private hostElement: ElementRef) {
    
  }

  ngOnChanges(){
    if(!this.colors){
      this.colors = { bgColor: '#000000', fgColor: '#ffffff' };
    }
    this.setColors();
  }

  @HostListener("mouseleave")
  setColors() {
    this.hostElement.nativeElement.style.color = this.colors.fgColor;
    this.hostElement.nativeElement.style.backgroundColor = this.colors.bgColor;
  }

  @HostListener("mouseover")
  setReverseColors() {
    this.hostElement.nativeElement.style.color = this.colors.bgColor;
    this.hostElement.nativeElement.style.backgroundColor = this.colors.fgColor;
  }
}
