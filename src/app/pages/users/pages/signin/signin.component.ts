import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  host: {
    class: "flex flex-wrap w-full sm:w-[calc(100%-5rem)] content-start mx-auto px-10 pb-6"
  }
})
export class SigninComponent {
  errors:string[] = [];
  
  formUser = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  
  get email(){return this.formUser.get('email') as FormControl;}
  get password(){return this.formUser.get('password') as FormControl;}

  constructor(private fb: FormBuilder){}

  close(i: number){
    this.errors = this.errors.filter((err,index) => index !== i );
  }
  
  upload(){
    this.errors = [];
    if(this.formUser.valid){
      alert("upload")
    }else{
      if(this.email.errors?.['email']){
        this.errors.push("Email must be like user@example");
      }
      if(this.email.errors?.['required']){
        this.errors.push("Add an email");
      }
      if(this.password.invalid)
        this.errors.push("Add a password");
    }
  }
}
