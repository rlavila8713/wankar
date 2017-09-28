import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

//guard

// COMPONENTS
import { HomeTemplateComponent } from "../templates/home/home.template.component";
import { UserDashBoardComponent } from './user-dashboard/user-dashboard.component';

export const routes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashBoardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogeadoRoutingModule { }
