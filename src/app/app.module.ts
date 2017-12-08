import { ReviewsModule } from './reviews/reviews.module';
import { AlertService } from './_services/alert.service';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';
import { AuthModule } from './auth/auth.module';
import { AlertComponent } from './_directives/alert.component';
import { AuthenticationService } from './_services/authentication.service';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    HotelsModule,
    ReviewsModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
