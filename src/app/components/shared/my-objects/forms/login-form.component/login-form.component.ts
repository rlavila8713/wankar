import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../../services/notifications.service';

//componente modelos, servicios
//import { AuthService } from '../services/auth/auth.service';
import { AuthenticationService } from '../../../../../services/auth/authentication.service';
import { NewUserModel } from '../../../../../core/models/auth/new-user.model';
import { LoginModel } from '../../../../../core/models/auth/login.model';


//SERVICIOS

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  providers: [FormsModule],
  styles: ['login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  loading = false;
  error = '';
  model: LoginModel;
  mytoken: any = '';

  constructor(private router: Router,
    private _authenticationService: AuthenticationService,
    private _notif: NotificationsService) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
    //var texto = this._loginService.signup();
    //console.log();
    //this._authenticationService.logout();
  }

  login() {    
    this.loading = true;
    console.log(this.model);
    this._authenticationService.login(this.model)
      .subscribe(result => {
        if (result === true) {
          this._notif.showSuccess("Success");
          /*console.log('entro al Index 2 : ');
          let tas = localStorage.getItem('identity');
          console.log('ver localStorage identity : ' + tas);
          let tokens = localStorage.getItem('token');
          console.log('ver localStorage token : ' + tokens);
          console.log('valor isLoggedIn : ' + this._authenticationService.isLoggedIn);
          this.mytoken = tokens;*/
          this.router.navigate(['/logeado/user-dashboard']);
        } else {
          console.log('entra al error : ');
          console.log(result);
          //this.router.navigate(['/logeado/index2']);
          this.error = 'Username or password';
          this.loading = false;
        }
      }, error => {
        this._notif.showError(error);
        this.error = error;
        console.log(this.error);
      });
  }
}

