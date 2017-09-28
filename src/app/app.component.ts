import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { NotificationsService } from "./services/notifications.service";
import { LoadingService } from "./services/loading.service";
import { LoginStatusService } from "./services/login-status.service";

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: []
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _notifications: NotificationsService,
    private _loading: LoadingService,
    private _status: LoginStatusService
  ) {
  }
  ngOnInit() {
    //si el usuario ya fue iniciado anteriormente devolverto a donde se quedo
    this._status.load();
    if (this._status.isLogged())
      this._router.navigate([this._status.getStorage().last_url]);

    //cargando en cada cambio de ruta
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._loading.start();
      } else if (event instanceof NavigationEnd) {
        this._loading.stop();
        window.scrollTo(0, 0);

        //almacenar el routing
        this._status.getStorage().last_url = this._router.url;
        this._status.save();
      } else if (event instanceof NavigationCancel) {
        this._loading.stop();
      } else if (event instanceof NavigationError) {
        this._loading.stop();
      }
    });
  }

  ngOnDestroy() {

  }
}