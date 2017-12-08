import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { Routes } from '@angular/router';

export const ReviewRoutes: Routes = [
  {path: ':hotelId/reviews', component: ReviewListComponent,
  children: [
    { path: 'add', component: ReviewAddComponent },
    { path: ':reviewId', component: ReviewComponent },
    { path: ':reviewId/edit', component: ReviewEditComponent}
  ]
}
];
