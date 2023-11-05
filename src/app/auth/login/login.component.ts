import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) {}

  LoginFormGroup: FormGroup = this.formBuilder.group({
    email: [],
    password: [],
  });

  leerDatos(){
    console.log(this.LoginFormGroup.value)
  }
}
