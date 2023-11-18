import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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

  login(email: string,password: string): Observable<User>{
    return of({
      user_name: userTest.user_name,
      email: email
    }).pipe(
      tap( (data: User) => {
        this.user.next(data);
        this.currentUserLoginOn.next(true);
        this.cookieService.set('session', 'true');
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
      })
    )
  }
  
  signup(user_name: string,email: string,password: string): Observable<User>{
    return of({ user_name, email: email }).pipe(
      tap( (data: User) => {
        this.user.next(data);
        this.currentUserLoginOn.next(true);
        this.cookieService.set('session', 'true');
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
