import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//declarations
import { LoginComponent } from "./login/login.component";
import { InvitadoRoutingModule } from "./invitado-routing.module";
import { InicioModule } from "./inicio/inicio.module";
import { RegistroComponent } from "./registro/registro.component";
import { RouterModule } from "@angular/router";
import { LoginFacebookComponent } from "./login/login-facebook.component";
import { MyObjectsModule } from "../shared/my-objects/my-objects.module";
import { LoginTwitterComponent } from "./login/login-twitter.component";
import { LoginGooglePlusComponent } from "./login/login-google_plus.component";
import { CommonModule } from "@angular/common";
import { RegistroCompletadoComponent } from "./registro-completado/registro-completado.component";
import { TemplatesModule } from "../templates/templates.module";
import { CursosComponent } from "./cursos/cursos.component";

@NgModule({
  imports: [
    InvitadoRoutingModule,
    InicioModule,
    RouterModule,
    MyObjectsModule,
    InvitadoRoutingModule,
    FormsModule,
    CommonModule,
    TemplatesModule
  ],
  declarations: [
    LoginComponent,
    LoginGooglePlusComponent,
    RegistroComponent,
    RegistroCompletadoComponent,
    LoginFacebookComponent,
    LoginTwitterComponent,
    CursosComponent
  ],
  providers: []
})
export class InvitadoModule { }
