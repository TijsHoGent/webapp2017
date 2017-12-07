import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { XHRBackend } from '@angular/http';


@Injectable()
export class CustomHttp extends Http {

  private _appUrl: String = 'http://localhost:4200/';

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
      super(backend, defaultOptions);
    }
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return super.get(this._appUrl + url, this.addJwt(options)).catch(this.handleError);
    }

    post(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return super.post(this._appUrl + url, this.addJwt(options)).catch(this.handleError);
    }


    private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
      options = options || new RequestOptions();
      options.headers = options.headers || new Headers();

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        options.headers.append('Authorization', 'Bearer ' + currentUser.token);
      }

      return options;
    }

    private handleError(error: any) {
      if (error.status === 401) {
        window.location.href = '/login';
      }

      return Observable.throw(error._body);
    }
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new CustomHttp(xhrBackend, requestOptions);
}

export let customHttpProvider = {
  provide: Http,
  useFactory: customHttpFactory,
  deps: [XHRBackend, RequestOptions]
};
