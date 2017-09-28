import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

//guard

// COMPONENTS
import { LoginComponent } from "./login/login.component";
import { HomeTemplateComponent } from "../templates/home/home.template.component";
import { InicioComponent } from "./inicio/inicio.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginFacebookComponent } from "./login/login-facebook.component";
import { LoginTwitterComponent } from "./login/login-twitter.component";
import { LoginGooglePlusComponent } from "./login/login-google_plus.component";
import { RegistroCompletadoComponent } from "./registro-completado/registro-completado.component";
import { CursosComponent } from "./cursos/cursos.component";
export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'login-facebook',
        component: LoginFacebookComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'login-twitter',
        component: LoginTwitterComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'login-google_plus',
        component: LoginGooglePlusComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'registro',
        component: RegistroComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'registro_completado',
        component: RegistroCompletadoComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'lista-noticias',
        //component: ListaNoticiasComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'curso/:id_curso',
        //component: CursoFreeComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
