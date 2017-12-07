import { UserService } from './../_services/user.service';
import { AuthenticationService } from './../_services/authentication.service';

import { AuthenticationRoutes } from './authentication.routes';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthenticationRoutes)
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthModule { }
