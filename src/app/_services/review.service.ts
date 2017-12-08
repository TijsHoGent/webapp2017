import { Observable } from 'rxjs/Observable';
import { Review } from './../_models/review';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReviewService {

  private _apiUrl = '/api/hotels/';
  constructor(private _http: Http) { }

  getReviews(hotelId: String): Observable<Review[]> {
    return this._http.get(this._apiUrl + hotelId + '/reviews')
    .map(response => response.json());
  }

  addReview(hotelId: String, review: Review) {
    const body = {
      hotelid: hotelId,
      review: review,
    };
    return this._http.post(this._apiUrl + hotelId + '/reviews/add', body);
  }

}
