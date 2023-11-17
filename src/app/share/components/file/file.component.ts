import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
  host: {
    class: "flex flex-col items-end w-full my-4 mt-4"
  }
})
export class FileComponent {
  @Input() title: string = "";
}
