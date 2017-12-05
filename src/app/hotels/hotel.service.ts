import { Hotel } from './../models/hotel.class';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
@Injectable()
export class HotelService {

  private _baseUrl = 'api/hotels';

  constructor(private _http: Http) { }

  create(hotel: Hotel): Observable<Hotel> {
    return this._http.post(this._baseUrl, hotel)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  list(): Observable<Hotel[]> {
    return this._http
        .get(this._baseUrl)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().message || 'server error');
  }
}
