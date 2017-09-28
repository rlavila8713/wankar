import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICIOS
// import {NotificationsService} from "../../../services/notifications.service";
// import {LoginModel} from "../../../core/models/auth/login.model";
// import {AuthService} from "../../../services/api/auth/auth.service";
// import {MisFuncionesModule} from "../../../utils/funciones";
// import {LoginStatusService} from "../../../services/login-status.service";
// import {StorageModel} from "../../../core/models/auth/storage.model";

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  providers: [FormsModule],
  styles: ['login.component.css'],
})
export class LoginComponent implements OnInit{

  constructor(
    private _router: Router,
    // private _noti: NotificationsService,
    // private _auth: AuthService,
    // private _status: LoginStatusService
  ){
  }

  ngOnInit(){
  }

}

