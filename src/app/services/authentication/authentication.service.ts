import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IUserData {
  username: string;
  isAdmin: boolean;
}

interface IAuthenticationData {
  isLoggedin: boolean;
  loggedInUser: IUserData;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  login() {
    this.isLoggedIn$.next(true);
  }

  logout() {
    this.isLoggedIn$.next(false);
  }
}
