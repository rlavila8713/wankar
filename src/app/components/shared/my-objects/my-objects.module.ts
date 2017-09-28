import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

//COMPONENTES
import { AtrasBtnComponent } from "./atras-btn/atras-btn.component";
import { LoginFormComponent } from "./forms/login-form.component/login-form.component";
import { RegistroFormComponent } from "./forms/registro-form-component/registro-form.component";
import { WankarHeaderComponent } from "./header/wankar-header.component";
import { FacebookBtnComponent } from "./facebook-btn/facebook-btn.component";
import { GooglePlusBtnComponent } from "./google-plus-btn/google-plus-btn.component";
import { TwitterBtnComponent } from "./twitter-btn/twitter-btn.component";
import { WankarFooterComponent } from "./footer/wankar-footer.component";


import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  exports: [
    AtrasBtnComponent,
    LoginFormComponent,
    RegistroFormComponent,
    WankarHeaderComponent,
    FacebookBtnComponent,
    GooglePlusBtnComponent,
    TwitterBtnComponent,
    WankarFooterComponent

  ],
  declarations: [
    AtrasBtnComponent,
    LoginFormComponent,
    RegistroFormComponent,
    WankarHeaderComponent,
    FacebookBtnComponent,
    GooglePlusBtnComponent,
    TwitterBtnComponent,
    WankarFooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class MyObjectsModule { }
