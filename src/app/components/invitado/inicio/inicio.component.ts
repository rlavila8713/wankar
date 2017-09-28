import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from "../../../services/login-status.service";
import { NotificationsService } from "../../../services/notifications.service";

@Component({
  selector: 'app-layout1',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: []
})
export class InicioComponent implements OnInit {
  private isLogged: boolean;

  constructor(
     private _route: Router,
     private _notifications: NotificationsService,
     private _status: LoginStatusService
  ) {
  }

  ngOnInit() {
    this._status.storageReporter.subscribe((data) => {
      this.isLogged = this._status.isLogged();
    });
    this._status.remove();
  }

  public onLogin() {
    // this._route.navigate(['/login']);
  }
}
