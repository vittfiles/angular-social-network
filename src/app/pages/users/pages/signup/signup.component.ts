import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../../core/util/my-validators/confirm-password.validator';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    class: "flex flex-wrap w-full sm:w-[calc(100%-5rem)] content-start mx-auto px-10 pb-6"
  }
})
export class SignupComponent implements OnInit {
  errors:string[] = [];
  
  formUser = this.fb.group({
    user: ['',Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password1: ['', Validators.required],
    password2: ['', Validators.required]
  });
  
  get user(){return this.formUser.get('user') as FormControl;}
  get email(){return this.formUser.get('email') as FormControl;}
  get password1(){return this.formUser.get('password1') as FormControl;}
  get password2(){return this.formUser.get('password2') as FormControl;}

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formUser.setValidators(confirmPasswordValidator());
  }

  close(i: number){
    this.errors = this.errors.filter((err,index) => index !== i );
  }
  
  upload(){
    this.errors = [];
    if(this.formUser.valid){
      this.auth.signup(
        this.user.value as string,
        this.email.value as string,
        this.password1.value as string
      ).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.errors.push("Error when try to connect");
        },
        complete: () => {
          this.router.navigateByUrl('/');
          this.formUser.reset();
        }
      });
    }else{
      if(this.user.errors?.['required'])
        this.errors.push("Add an user name");

      if(this.email.errors?.['email'])
        this.errors.push("Email must be like user@example");

      if(this.email.errors?.['required'])
        this.errors.push("Add an email");

      if(this.password1.errors?.['required'])
        this.errors.push("Add a password");

      if(this.password2.errors?.['required'] && this.password1.valid)
        this.errors.push("Confirm the password");

      if(this.formUser.errors?.['PasswordNoMatch'] && this.password1.valid && this.password2.valid)
        this.errors.push("The passwords don't match");
    }
  }
}
