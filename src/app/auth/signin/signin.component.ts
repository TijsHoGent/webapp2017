
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errorMessage: String;
  loading = false;
  credentials: any = {};
  returnUrl: String;
  // tslint:disable-next-line:max-line-length
  constructor(
    private _route: ActivatedRoute,
    private _service: AuthenticationService,
    private _router: Router,
    private _alertService: AlertService) { }

  ngOnInit() {
    this._service.logout();

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn() {
    this.loading = true;
    this._service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        error => {
          this._alertService.error(error);
          this.loading = false;
        }
      );
  }

}
