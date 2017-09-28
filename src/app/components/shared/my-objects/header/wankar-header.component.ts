import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLinkActive } from "@angular/router";
import { LoginStatusService } from "../../../../services/login-status.service";

@Component({
  selector: 'wankar-header',
  templateUrl: './wankar-header.component.html'
})
export class WankarHeaderComponent implements OnInit {

  private is_inicio: boolean = false;
  private is_logged: boolean = false;
  private rol: string = '';
  private identity ='';

  constructor(
    private _router: Router,
    private _status: LoginStatusService,
  ) {

  }
  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.is_inicio = this._router.url == "/inicio";
      }
    });

    this._status.storageReporter.subscribe((storage) => {
      this.is_logged = this._status.isLogged();
      this.identity = this._status.getStorage().user;
      if (this._status.isAdmin()) {
        this.rol = 'admin';
      } else if (this._status.isTeacher()) {
        this.rol = 'teacher';
      } else {
        this.rol = 'student';
      }
    });
    console.log(this.is_logged);
    console.log(this._status.getStorage().authorization_token);
  }
}


