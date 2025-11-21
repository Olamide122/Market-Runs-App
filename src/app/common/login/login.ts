import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Loginmodel } from '../../model/loginmodel';
import { CommonModule } from '@angular/common';
import { Master } from '../../service/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login implements OnInit{
//  constructor() {}

//   loginForm = new FormGroup({
//     username: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required),
//   }); 

//   toLoggin() {
//     if (this.loginForm.valid) {
//       // Perform login action
//       console.log('Login successful');
//     }
//   }
  constructor(private service: Master,private router:Router ){
  }
  ngOnInit(): void {
    localStorage.clear();
  }

  _logindata:Loginmodel={
    username: '',
    password: ''
  }

  toLogin(form: any){
    if (form.valid){
      this.service.toLogin(this._logindata).subscribe(item=> {
        let __resp = item;
        if(__resp.length>0){
          console.log(__resp)
          localStorage.setItem('username',this._logindata.username);
          this.router.navigateByUrl('/home');
        }else{
          alert("INVALID CREDENTIALS");
        }
      })
    }

  }
}
