import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  public htlmElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _message: string = 'Este campo es obligatorio';

  @Input() set valid (value: boolean) {
    if(value) 
      this.htlmElement.nativeElement.classList.add('hidden');
    else
      this.htlmElement.nativeElement.classList.remove('hidden');
  }

  @Input() set color (value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message (value: string){
    this._message = value;
    this.setMessage();
  }

  constructor( private element: ElementRef<HTMLElement>) {
    
    this.htlmElement = element;
  }

  ngOnInit(): void {
    this.setClass();
    this.setMessage();
    this.setColor();
  }

  setClass() {
    this.htlmElement.nativeElement.classList.add('form-text');
  }

  setMessage() {
    this.htlmElement.nativeElement.innerText = this._message;
  }

  setColor() {
    this.htlmElement.nativeElement.style.color = this._color;
  }
}
