import { Hotel } from './../../models/hotel.class';
import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hotels: any;
  errorMessage: string;
  constructor(private _service: HotelService) { }

  ngOnInit() {
    this._service.list().subscribe(hotels => {
      this.hotels = hotels;
      console.log(hotels);
    });
  }

}
