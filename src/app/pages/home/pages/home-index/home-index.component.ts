import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { User } from '../../../../core/models/User';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex content-start pb-6"
  }
})
export class HomeIndexComponent implements OnInit, OnDestroy{
  login: boolean = false;
  user: User = {user_name: "",email: ""};
  notifier = new Subject();

  constructor(private authService: AuthService){}

  closeSession():void{
    this.authService.logout().pipe(takeUntil(this.notifier)).subscribe((res: any)=>{});
  }
  
  ngOnInit(): void {
    this.authService.userLoginOn.pipe(takeUntil(this.notifier)).subscribe(res=>{this.login = res});
    this.authService.userData.pipe(takeUntil(this.notifier)).subscribe(res=>{this.user = res});
  }

  ngOnDestroy(): void {
    this.notifier.next(true);
    this.notifier.complete();
  }

}
