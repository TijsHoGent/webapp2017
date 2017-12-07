import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: any = {};
  loading = false;
  constructor(private _service: UserService, private _router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  signUp() {
    this.loading = true;
    this._service.create(this.user)
    .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this._router.navigate(['/']);
      },
      error => {
        this.alertService.error('something went wrong');
        this.loading = false;
      }
    );
  }

}
