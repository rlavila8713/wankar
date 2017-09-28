import {AfterViewInit, Component, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChangePassFormComponent} from "../../shared/my-objects/forms/user-change_pass-form-component/user-change_pass-form.component";

@Component({
  templateUrl: 'user-change-pass.component.html',
  providers: [FormsModule]
})
export class ChangePassComponent implements AfterViewInit{

  @ViewChildren('changeForm') changeForm: ChangePassFormComponent;

  constructor(){

  }

  ngAfterViewInit(){

  }

}
