import { SigninComponent } from './signin/signin.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
export const AuthenticationRoutes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
];

