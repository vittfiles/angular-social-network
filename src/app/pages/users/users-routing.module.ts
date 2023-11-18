import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { IndexUsersComponent } from './pages/index-users/index-users.component';
import { AuthGuardGuard } from '../../core/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexUsersComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
];

@NgModule({
  providers: [AuthGuardGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
