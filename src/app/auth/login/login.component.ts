import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email : "bricia@gmail.com",
    password : "12345"
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.setLocalStorage;
  }

  
  LoginFormGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email , Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  leerDatos(){
    console.log(this.LoginFormGroup.value);
    if (this.LoginFormGroup.value.email === this.user.email && this.LoginFormGroup.value.password === this.user.password) {
      alert("Bienvenido");
      this.router.navigate(['/']);
    }else{
      alert("Datos incorrectos");
    }
  }

  setLocalStorage(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getLocalStorage() {
    const userString = localStorage.getItem('user');
  }


  removeLocalStorage() {
    localStorage.removeItem('user');
  }

}
