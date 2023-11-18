import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthGuardGuard implements CanActivate {
  
  constructor(private cookieService: CookieService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // your  logic goes here
      let cookie = this.cookieService.get('session');
      if(cookie.match('true')){ 
        return true;
      }else{
        return false;
      }
  }
}