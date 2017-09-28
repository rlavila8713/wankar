import { NgModule } from '@angular/core';
import { HomeTemplateComponent } from "./home/home.template.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MyObjectsModule } from "../shared/my-objects/my-objects.module";


@NgModule({
  exports: [
    HomeTemplateComponent
  ],
  declarations: [
    HomeTemplateComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MyObjectsModule
  ],
  providers: []
})
export class TemplatesModule { }
