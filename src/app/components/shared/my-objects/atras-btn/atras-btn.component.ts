import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'back-btn',
    templateUrl: 'atras-btn.component.html'
})
export class AtrasBtnComponent implements OnInit{

    constructor(private _location: Location){

    }

    ngOnInit(){

    }

    onBack(){
        this._location.back();
    }
 }
 
