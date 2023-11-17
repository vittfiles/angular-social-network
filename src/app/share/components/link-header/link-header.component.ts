import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-header',
  templateUrl: './link-header.component.html',
  styleUrl: './link-header.component.scss',
  host: {
    class: "w-16 sm:w-full relative group/ic"
  }
})
export class LinkHeaderComponent {
  @Input() title: string= "";
  @Input() icon: string= "";
}
