import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './aside.component';

const routes: Routes = [];


@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
