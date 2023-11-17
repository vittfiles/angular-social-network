import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  host: {
    class: "flex justify-between w-full items-center rounded-lg border-4 border-red-400 text-red-400 px-8 py-2 my-2"
  }
})
export class ErrorComponent {
  @Input() msg: string = "";
  @Output() close = new EventEmitter();
  clickHandle(){
    this.close.emit();
  }
}
