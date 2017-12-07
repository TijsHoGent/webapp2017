import { User } from './../_models/user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User) {
    return this._http.post('users/signup', user);
  }


}
