import { ReviewService } from './../_services/review.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-edit',
  template: `<router-outlet></router-outlet>`,
  providers: [ReviewService]
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
