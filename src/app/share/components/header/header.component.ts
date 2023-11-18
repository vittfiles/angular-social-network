import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: "flex justify-evenly sm:justify-start sm:flex-col text-center w-full sm:w-[5rem] p-2 bg-greenl sm:sticky top-0 z-[1]"
  }
})
export class HeaderComponent implements OnInit, OnDestroy{
  login: boolean = false;
  subscription?: Subscription;

  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.subscription = this.authService.userLoginOn.subscribe(res=>this.login = res);
  }

  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
