import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NotificationsService} from "../../../../../services/notifications.service";
/*import {MisFuncionesModule} from "../../../../../utils/funciones";
import {ChangePassModel} from "../../../../../core/models/users/change_pass.model";
import {UsersService} from "../../../../../services/api/users/users.service";*/
import {LoginStatusService} from "../../../../../services/login-status.service";

@Component({
  selector: 'user-change_pass-form',
  templateUrl: 'user-change_pass-form.component.html',
  providers: [FormsModule]
})
export class ChangePassFormComponent implements OnInit{

 // public model = new ChangePassModel('', '');

  public user = "";

  public submited = false;

  private errors = {};

  constructor(private _router: Router,
              /*private  _users: UsersService,*/
              private _noti: NotificationsService, private _status: LoginStatusService){

  }

  ngOnInit(){
    this.user = this._status.getStorage().user;
  }

  onCambiar(){
    /*this._users.change_pass(this.model).subscribe(
      (body) => {
        //validacion de errors
        if(body.status == "error"){
          this._noti.showWarning("Errores en los datos");
          console.log(JSON.stringify(body));
          //this.errors = MisFuncionesModule.transformErrors(body.errors);
        }else{
          this._noti.showSuccess("La contraseña se cambió con éxito");
          this.submited = true;
        }
      },
      (err) => {
        this._noti.showError("ha ocurrido un error de comunicación con el servidor");
        console.error(err);
      }
    );*/
  }


}

