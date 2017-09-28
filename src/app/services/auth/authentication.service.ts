import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONFIG } from '../../config/config';
import { UrlList } from '../url-list';
import { Md5 } from 'ts-md5/dist/md5';
import { LoginModel } from "../../core/models/auth/login.model";
import { NewUserModel } from "../../core/models/auth/new-user.model";
import { LoginStatusService } from '../../services/login-status.service';

import { MyHttpService } from "../my-http.service";

@Injectable()
export class AuthenticationService {
  private api_url: string;
  private signup_url: string;
  private login_url: string;
  private logout_url: string;
  public token: string;
  public isLoggedIn: boolean = false;


  /*constructor(private _http: Http, private _status: LoginStatusService) {
   // set token if saved in local storage
   this.api_url = CONFIG.url;
   var currentUser = JSON.parse(localStorage.getItem('tasnet'));
   this.token = currentUser && currentUser.token;
    this.login_url = UrlList.apiLogin;
  }*/
  constructor(private _http: MyHttpService, private _status: LoginStatusService) {
    // set token if saved in local storage
    this.api_url = CONFIG.url;
    this.login_url = UrlList.apiLogin;
    this.signup_url = UrlList.apiSignUp;

    var currentUser = JSON.parse(localStorage.getItem('tasnet'));
    this.token = currentUser && currentUser.token;
  }

  signup(user: NewUserModel) {
    return this._http.post(this.signup_url, user)
      .map((res => res.json()))
      .catch(this.handleError);
  }

  login(user: LoginModel): Observable<boolean> {
    console.log(this._status.getStorage());

    let password_hash = Md5.hashStr(user.password).toString();
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('password', password_hash);
    let body = urlSearchParams.toString();

    return this._http.post(this.api_url + this.login_url, body)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        //let token = response.json() && response.json().token;
        let _token = response.json();

        if (_token) {
          // set token property
          this.token = _token;
          /**Parsing JWT to get the user_logged id**/

          var parts = this.token['jwt'].split('.');
          let id_user_logged = this.decodeToken(parts)['jti'];
          let id_user_person_logged = this.decodeToken(parts)['id_persona'];

          // store username and jwt token in local storage to keep user logged in between page refreshes
          //Guarda datos en el localStorage

          this._status.getStorage().authorization_token = _token;
          this._status.getStorage().user_id = JSON.stringify({ id_persona: id_user_person_logged });
          this._status.getStorage().user = user.username;

          /*localStorage.setItem('tasnet', JSON.stringify({ username: user.username, token: _token }));
          localStorage.setItem('identity', JSON.stringify({ username: user.username, id_usuario: id_user_logged, id_persona: id_user_person_logged }));
          localStorage.setItem('token', JSON.stringify(_token));*/

          //localStorage.setItem('id_user_logged', JSON.stringify({id_usuario:id_user_logged}));
          console.log('LOCAL STORAGE : ');
          console.log(this._status.getStorage());
          // return true to indicate successful login
          // this.isLoggedIn = true;
          return true;
        } else {
          // return false to indicate failed login
          console.log('cuando token false: ');
          // this.isLoggedIn = false;
          return false;
        }
      }).catch(this.handleError);
  }

  logout(): void {
    this._status.remove();
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  decodeToken(parts: string) {
    var decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }
    return JSON.parse(decoded);
  }

  private urlBase64Decode(str: string) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        {
          break;
        }
      case 2:
        {
          output += '==';
          break;
        }
      case 3:
        {
          output += '=';
          break;
        }
      default:
        {
          throw 'Illegal base64url string!';
        }
    }
    return decodeURIComponent((window.atob(output)));
  }
}
