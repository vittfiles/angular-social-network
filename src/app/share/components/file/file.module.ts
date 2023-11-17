import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FileComponent } from './file.component';


@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FileComponent
  ]
})
export class FileModule { }
