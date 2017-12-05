import { HotelsRoutes } from './hotels.routes';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HotelsComponent } from './hotels.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(HotelsRoutes)
  ],
  declarations: [
    HotelsComponent,
    ListComponent,
    CreateComponent
  ]
})
export class HotelsModule {}

