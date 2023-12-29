import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JsonPipe } from '@angular/common';

let userTest: User = {
  user_name: 'San Martin',
  email: 'el_lebertador@email.com'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private user: BehaviorSubject<User> = new BehaviorSubject<User>({
    user_name: '',
    email: ''
  });

  constructor(private cookieService: CookieService) { }

  initState(){
    if(this.cookieService.get('session'))
    this.currentUserLoginOn.next(true);
  if(this.cookieService.get('sessionUser')){
    let oldUser = JSON.parse(this.cookieService.get('sessionUser'));
    this.user.next(oldUser);
  }
  }

  login(email: string,password: string): Observable<User>{
    let newUser = {
      user_name: userTest.user_name,
      email: email
    }
    return of(newUser).pipe(
      tap( (data: User) => {
        this.user.next(data);
        this.currentUserLoginOn.next(true);
        this.cookieService.set('session', 'true', { expires: 1, sameSite: 'Lax' });
        this.cookieService.set('sessionUser', JSON.stringify(newUser), { expires: 1, sameSite: 'Lax' });
      })
    );
  }
  logout(): any{
    return of({}).pipe(
      tap((data)=>{
        this.user.next(({
          user_name: '',
          email: ''
        }));
        this.currentUserLoginOn.next(false);
        this.cookieService.delete('session');
        this.cookieService.delete('sessionUser');
      })
    )
  }
  
  signup(user_name: string,email: string,password: string): Observable<User>{
    let newUser ={ user_name, email: email }
    return of(newUser).pipe(
      tap( (data: User) => {
        this.user.next(data);
        this.currentUserLoginOn.next(true);
        this.cookieService.set('session', 'true', { expires: 1, sameSite: 'Lax' });
        this.cookieService.set('sessionUser', JSON.stringify(newUser), { expires: 1, sameSite: 'Lax' });
      })
    );
  }
  
  get userData():Observable<User>{
    return this.user.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}
