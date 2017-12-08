import { RouterModule } from '@angular/router';
import { ReviewRoutes } from './reviews.routes';
import { ReviewsComponent } from './reviews.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewService } from '../_services/review.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ReviewRoutes)
  ],
  declarations: [ReviewsComponent, ReviewListComponent, ReviewComponent, ReviewEditComponent, ReviewAddComponent],
  providers: [ReviewService]
})
export class ReviewsModule { }
