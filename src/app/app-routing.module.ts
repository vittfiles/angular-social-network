import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: ()=> import('./pages/images/images.module').then(m=>m.ImagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
