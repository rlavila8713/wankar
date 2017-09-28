import { Component, OnInit } from '@angular/core';

//servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout2',
  templateUrl: './home.template.component.html',
  styleUrls: ['./home.template.component.css']
})
export class HomeTemplateComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
}
