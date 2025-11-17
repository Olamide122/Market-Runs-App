import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    houseAddress: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
  }); 

  constructor() {}

  onSubmit() {
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    const email = this.registerForm.get('email')?.value;
    const houseAddress = this.registerForm.get('houseAddress')?.value;
    const phonenumber = this.registerForm.get('phonenumber')?.value;
    console.log('Registration attempt:', { username, password, confirmPassword, email, houseAddress, phonenumber });

    // Add registration logic here

}
}
