import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DragDropModule } from '../../share/directives/drag-drop/drag-drop.module';
import { ErrorModule } from '../../share/components/error/error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexUsersComponent } from './pages/index-users/index-users.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    IndexUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DragDropModule,
    ErrorModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
