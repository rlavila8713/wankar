import { NgModule } from '@angular/core';

import { UserDashBoardComponent } from "./user-dashboard.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MyObjectsModule } from "../../shared/my-objects/my-objects.module";

@NgModule({
    declarations: [
        UserDashBoardComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MyObjectsModule
    ],
    providers: []
})
export class InicioModule { }
