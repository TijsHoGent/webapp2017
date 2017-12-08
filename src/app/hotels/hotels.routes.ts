import { CreateComponent } from './create/create.component';

import { Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { ListComponent } from './list/list.component';

export const HotelsRoutes: Routes = [{
  path: '',
  component: HotelsComponent,
  children: [
    {path: '', component: ListComponent },
    {path: 'create', component: CreateComponent}
  ]
}];
