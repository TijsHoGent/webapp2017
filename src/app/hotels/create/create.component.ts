import { HotelService } from '../hotel.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  hotel: any = {};
  errorMessage: String;
  constructor(private _router: Router, private _service: HotelService) { }

  ngOnInit() {
  }

  create() {
    this._service
      .create(this.hotel)
      .subscribe(createdHotel => console.log('hotel added'),
              error => this.errorMessage = error);
  }

}
