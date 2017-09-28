import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { LogeadoRoutingModule } from "./logeado-routing.module";
import { UserDashBoardComponent } from "./user-dashboard/user-dashboard.component";
import { MyObjectsModule } from "../shared/my-objects/my-objects.module";
//declarations
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LogeadoRoutingModule,
    MyObjectsModule
  ],
  declarations: [
    UserDashBoardComponent
  ],
  providers: []
})
export class LogeadoModule { }
