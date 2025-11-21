import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Master } from '../../service/master';
import { user } from '../../model/loginmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  registerForm: FormGroup;

  constructor(private builder:FormBuilder,private service:Master, private router:Router ) {
    this.registerForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      confirmPassword: this.builder.control('', Validators.required),
      email: this.builder.control('', [Validators.required, Validators.email]),
      houseAddress: this.builder.control('', Validators.required),
      phonenumber: this.builder.control('', Validators.required),
    });
  }

    

  onSubmit() {
    if(this.registerForm.valid){
      let _data:user={
        id: this.registerForm.value.username as string,
        password: this.registerForm.value.password as string,
        confirmPassword: this.registerForm.value.confirmPassword as string,
        email: this.registerForm.value.email as string,
        homeAddess: this.registerForm.value.homeAddess as string,
        phoneNumber: this.registerForm.value.phoneNumber as string
      }
      this.service.isRegistered(_data).subscribe(item=>{
        alert('reg successful...');
        this.router.navigateByUrl("/");
      });
    }

}
}
