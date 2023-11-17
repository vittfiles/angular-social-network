import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { RouterModule } from '@angular/router';
import { FileComponent } from './file.component';


@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    RouterModule,
  ],
  exports: [
    FileComponent
  ]
})
export class FileModule { }
