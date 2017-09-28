import { Injectable } from '@angular/core';
import {ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {LoginStatusService} from "./login-status.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MyHttpService{

  public options: RequestOptions;

  constructor(private _http: Http, private _status: LoginStatusService){
    this._status.storageReporter.subscribe((storage) => {
      let headers = new Headers({
         'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/json',
      });
      if(this._status.isLogged()){
        headers.append('Authorization', 'Bearer '+this._status.getStorage().authorization_token);
      }
      this.options = new RequestOptions({ headers: headers });
    });
  }

  get(url: string): Observable<Response>{
    return this._http.get(url, this.options);
  }

  post(url: string, body: any): Observable<Response>{
    return this._http.post(url, body, this.options);
  }

  put(url: string, body: any): Observable<Response>{
    return this._http.put(url, body, this.options);
  }

  delete(url: string): Observable<Response>{
    return this._http.delete(url, this.options);
  }

  // patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  //
  // head(url: string, options?: RequestOptionsArgs): Observable<Response>;
  //
  // options(url: string, options?: RequestOptionsArgs): Observable<Response>;
}
