import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { Uploader } from 'angular2-http-file-upload';

// Notifications

//Servicios

import { NotificationsService } from "./services/notifications.service";
import { LoadingService } from "./services/loading.service";
import { AuthenticationService } from './services/auth/authentication.service';
//errors
import { Er404Component } from './components/shared/er404/er404.component';
import { Er500Component } from './components/shared/er500/er500.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

import { MyObjectsModule } from "./components/shared/my-objects/my-objects.module";

import { LoginStatusService } from "./services/login-status.service";
import { MyHttpService } from "./services/my-http.service";
import { ProgressHttpModule } from "angular-progress-http";

@NgModule({
  declarations: [
    AppComponent,
    Er404Component,
    Er500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MyObjectsModule,
    ProgressHttpModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    MyHttpService,
    NotificationsService,
    LoadingService,
    Uploader,
    LoginStatusService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}



