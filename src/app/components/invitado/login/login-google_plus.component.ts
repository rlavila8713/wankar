import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICIOS

@Component({
    selector: 'login-google_plus-component',
    templateUrl: 'login-google_plus.component.html',
    providers: [FormsModule]
})
export class LoginGooglePlusComponent implements OnInit{
    constructor(
        private _router: Router,
    ){

    }

    ngOnInit(){

    }

    onLogin(){
        this._router.navigate(['/login-google_plus']);
    }
 }

