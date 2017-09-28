import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

//errors
import {Er404Component} from './components/shared/er404/er404.component';
import {Er500Component} from "./components/shared/er500/er500.component";

export const routes: Routes = [
  //PATH INICIAL
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  //SESION INVITADO
  {
    path: '',
    loadChildren: './components/invitado/invitado.module#InvitadoModule'
  },
  {
    path: 'logeado',
    loadChildren: './components/logeado/logeado.module#LogeadoModule'
  },
  //SESION ADMIN

  //VALORES POR DEFECTO
  {
    path: '**',
    component: Er404Component
  },
  //ERRORES DE ACCESO
  {
    path: 'error500',
    component: Er500Component
  },

];

@NgModule({
  imports: [
	RouterModule.forRoot(routes)
 ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
