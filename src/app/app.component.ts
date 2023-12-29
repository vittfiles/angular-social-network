import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './core/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-social-network';
  constructor(private cookieSession: CookieService, private authService: AuthService){
    //cookieSession.deleteAll();
    this.authService.initState();
  }
}
