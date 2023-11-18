import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './pages/home-index/home-index.component';
import { LinkHeaderModule } from '../../share/components/link-header/link-header.module';


@NgModule({
  declarations: [
    HomeIndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LinkHeaderModule
  ]
})
export class HomeModule { }
