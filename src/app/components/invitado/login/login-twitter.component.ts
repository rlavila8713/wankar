import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICIOS

@Component({
    selector: 'login-twitter-component',
    templateUrl: 'login-twitter.component.html',
    providers: [FormsModule]
})
export class LoginTwitterComponent implements OnInit{
    constructor(
        private _router: Router,
    ){

    }

    ngOnInit(){

    }

    onLogin(){
        this._router.navigate(['/login-twitter']);
    }
 }

