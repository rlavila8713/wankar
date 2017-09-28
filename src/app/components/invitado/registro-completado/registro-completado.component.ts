import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NewUserModel } from "../../../core/models/auth/new-user.model";
import { NotificationsService } from "../../../services/notifications.service";

@Component({
  templateUrl: 'registro-completado.component.html',
  providers: [FormsModule]
})
export class RegistroCompletadoComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {

  }
}

