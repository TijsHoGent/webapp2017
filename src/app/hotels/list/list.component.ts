import { AlertService } from './../../_services/alert.service';
import { Hotel } from '../../_models/hotel';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../_services/hotel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hotels: any[] = [];
  errorMessage: string;
  loading = false;
  constructor(private _service: HotelService, private _alertService: AlertService) { }

  ngOnInit() {
    this.loading = true;
    this.loadHotels();
  }

  loadHotels() {
    return this._service.getAll().subscribe(hotels => this.hotels = hotels);
  }
}
