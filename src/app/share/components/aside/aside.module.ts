import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './aside.component';
import { FileModule } from '../file/file.module';

const routes: Routes = [];


@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FileModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
