import { Component } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex content-start pb-6"
  }
})
export class HomeIndexComponent {

}
