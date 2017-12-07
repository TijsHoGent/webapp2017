import { HotelService } from '../../_services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../_services/alert.service';
import { User } from '../../_models/user';
import { Hotel } from '../../_models/hotel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  user: User;
  hotel: any = {};
  errorMessage: String;
  loading = false;
  constructor(private _router: Router, private _hotelService: HotelService, private _alertService: AlertService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  create() {
    this.loading = true;
    this._hotelService.create(this.hotel, this.user)
    .subscribe(data => {
      console.log('adding hotel');
      this._router.navigate(['/hotels']);
    },
    error => {
      console.log('error occurred');
      this.loading = false;
    });
  }

}
