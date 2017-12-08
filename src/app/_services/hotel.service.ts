import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Hotel } from '../_models/hotel';

import 'rxjs/add/operator/map';
@Injectable()
export class HotelService {
  private _apiUrl = '/api/hotels';

  constructor(private _http: Http) {}

  create(hotel: Hotel, user: User) {
    hotel.createdBy = user._id;
    hotel.createdAt = Date.now();
    return this._http.post(this._apiUrl, hotel);
  }

  getAll(): Observable<Hotel[]> {
    return this._http.get(this._apiUrl)
    .map(response => response.json());
  }
}
