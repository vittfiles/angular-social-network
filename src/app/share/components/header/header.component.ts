import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: "flex justify-evenly sm:justify-start sm:flex-col text-center w-full sm:w-[5rem] p-2 bg-greenl sm:sticky top-0 z-[1]"
  }
})
export class HeaderComponent {

}
