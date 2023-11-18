import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ImagesService } from '../../../../core/services/images/images.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../../../core/models/User';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-index-users',
  templateUrl: './index-users.component.html',
  styleUrl: './index-users.component.scss',
  host: {
    class: "flex flex-wrap w-full sm:w-[calc(100%-5rem)] content-start mx-auto px-10 pb-6"
  }
})
export class IndexUsersComponent implements OnInit, OnDestroy {
  user: User = {user_name: "",email: ""};
  notifier = new Subject();
  
  alert: string = "";
  errors: string[]= [];

  formUser = this.fb.group({
    user_name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]]
  });
  
  get user_name(){return this.formUser.get('user_name') as FormControl;}
  get email(){return this.formUser.get('email') as FormControl;}
  
  close(i: number){
    this.errors = this.errors.filter((err,index) => index !== i );
  }

  submit():void{
    this.errors = [];
    if(this.formUser.valid){
      this.auth.signup(
        this.user_name.value as string,
        this.email.value as string,
        ""
      ).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.errors.push("Error when try to connect");
        },
        complete: () => {
          this.alert = "The data was updated";
          this.formUser.reset();
        }
      });
    }else{
      if(this.user_name.errors?.['required'])
        this.errors.push("Add an user name");

      if(this.email.errors?.['email'])
        this.errors.push("Email must be like user@example");

      if(this.email.errors?.['required'])
        this.errors.push("Add an email");
    }
  }

  constructor(
    private fb: FormBuilder,
    private imgService: ImagesService,
    private auth: AuthService
  ){}

  ngOnInit(): void {
    this.auth.userData.pipe(takeUntil(this.notifier)).subscribe(res=>this.user);
  }
  
  ngOnDestroy(): void {
    this.notifier.next(true);
    this.notifier.complete();
  }
}
