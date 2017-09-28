import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NewUserModel } from "../../../../../core/models/auth/new-user.model";
import { NotificationsService } from "../../../../../services/notifications.service";

@Component({
  selector: 'registro-form',
  templateUrl: 'registro-form.component.html',
  providers: [FormsModule]
})
export class RegistroFormComponent implements OnInit {

  public model = new NewUserModel('', '', '');

  public submited = false;

  private errors = {};

  constructor(
    private _router: Router,
    // private  _auth: AuthService, 
    private _noti: NotificationsService) {

  }

  ngOnInit() {

  }

  onCrearCuenta() {
    // this._auth.signup(this.model).subscribe(
    //   (body) => {
    //     //validacion de errors
    //     if(body.status == "error"){
    //       this._noti.showWarning("Errores en los datos");
    //       console.log(JSON.stringify(body));
    //       this.errors = MisFuncionesModule.transformErrors(body.errors);
    //     }else{
    //       this.submited = true;
    //     }
    //   },
    //   (err) => {
    //     this._noti.showError("ha ocurrido un error de comunicación con el servidor");
    //     console.error(err);
    //   }
    // );
  }

}

