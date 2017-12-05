import { HotelService } from './hotel.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  template: `<router-outlet></router-outlet>`,
  providers: [ HotelService ]
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
