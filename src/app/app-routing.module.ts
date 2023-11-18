import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth-guard.guard';
import { NotFound404Component } from './not-found-404/not-found-404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: ()=> import('./pages/users/users.module').then(m=>m.UsersModule)
  },
  {
    path: 'images',
    loadChildren: ()=> import('./pages/images/images.module').then(m=>m.ImagesModule),
    canActivate: [AuthGuardGuard]
  },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  providers: [AuthGuardGuard],
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
