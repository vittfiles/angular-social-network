import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LinkHeaderModule } from '../link-header/link-header.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LinkHeaderModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
