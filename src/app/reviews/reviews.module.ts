import { RouterModule } from '@angular/router';
import { ReviewRoutes } from './reviews.routes';
import { ReviewsComponent } from './reviews.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReviewRoutes)
  ],
  declarations: [ReviewsComponent, ReviewListComponent, ReviewComponent, ReviewEditComponent]
})
export class ReviewsModule { }
