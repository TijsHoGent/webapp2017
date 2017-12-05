import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';

export const AppRoutes: Routes = [
  { path: '**', redirectTo: '/'}
];
