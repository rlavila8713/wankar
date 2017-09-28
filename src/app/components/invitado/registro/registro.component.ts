import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RegistroFormComponent } from "../../shared/my-objects/forms/registro-form-component/registro-form.component";

@Component({
  templateUrl: 'registro.component.html',
  providers: [FormsModule],
})
export class RegistroComponent implements AfterViewInit {

  @ViewChild('registroFrom') registroForm: RegistroFormComponent;

  constructor() {

  }

  ngAfterViewInit() {

  }


}

