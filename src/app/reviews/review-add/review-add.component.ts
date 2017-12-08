import { ActivatedRoute } from '@angular/router';
import { Review } from './../../_models/review';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ReviewService } from '../../_services/review.service';
import { Input } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {

  @Input()
  hotelid: String;
  review: Review = new Review();
  loading = false;

  @Output()
  refreshReviews: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, private _reviewService: ReviewService) { }

  ngOnInit() {

  }

  shareReview(textArea: HTMLTextAreaElement) {
    this.loading = true;
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    this.review.createdAt = Date.now();
    this.review.reviewContent = textArea.value;
    this.review.user._id = user._id;
    this.review.user.name = user.firstName + ' ' + user.lastName;
    this.route.params.subscribe(params => {
      this.hotelid = params['hotelId'];
    });

    this._reviewService.addReview(this.hotelid, this.review)
    .subscribe(data => {
      this.refreshReviews.emit(data);
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

}
