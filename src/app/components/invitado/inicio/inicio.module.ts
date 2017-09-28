import { NgModule } from '@angular/core';

import { InicioComponent } from "./inicio.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component"

import { ListaCursosInicioComponent } from "../shared/lista-cursos-inicio.component";


import { MyObjectsModule } from "../../shared/my-objects/my-objects.module";

@NgModule({
  declarations: [
    InicioComponent,
    ListaCursosInicioComponent
 
  ],
  imports: [
    RouterModule,    
    CommonModule,
    MyObjectsModule

  ],
  providers: []
})
export class InicioModule { }
