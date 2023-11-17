import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesIndexComponent } from './pages/images-index/images-index.component';
import { AllImagesComponent } from './pages/all-images/all-images.component';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';
import { ShowImageComponent } from './pages/show-image/show-image.component';
import { AsideModule } from '../../share/components/aside/aside.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '../../share/directives/drag-drop/drag-drop.module';
import { ErrorModule } from '../../share/components/error/error.module';
import { CommentModule } from '../../share/components/comment/comment.module';


@NgModule({
  declarations: [
    ImagesIndexComponent,
    AllImagesComponent,
    UploadImageComponent,
    ShowImageComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    AsideModule,
    ReactiveFormsModule,
    DragDropModule,
    ErrorModule,
    CommentModule
  ]
})
export class ImagesModule { }
