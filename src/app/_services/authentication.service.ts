import { User } from './../_models/user';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(username: string, password: string) {
    return this._http.post('users/signin', {username: username, password: password})
      .map((response: Response ) => {
        const user = response.json();
        console.log(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
