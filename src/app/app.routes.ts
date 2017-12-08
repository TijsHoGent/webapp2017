import { Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

export const AppRoutes: Routes = [
  { path: '**', redirectTo: '/'}
];
