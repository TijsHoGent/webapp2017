import { Router, ActivatedRoute } from '@angular/router';
import { Review } from './../../_models/review';
import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../_services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];
  hotelId: String;
  constructor(private route: ActivatedRoute, private _reviewService: ReviewService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hotelId = params['hotelId'];
    });
    this.loadReviews();
  }

  loadReviews() {
    this._reviewService.getReviews(this.hotelId).subscribe(reviews => this.reviews = reviews);
  }
}
