import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllImagesComponent } from './pages/all-images/all-images.component';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';
import { ShowImageComponent } from './pages/show-image/show-image.component';

const routes: Routes = [
  {
    path: '', component: AllImagesComponent
  },
  {
    path: 'upload-image', component: UploadImageComponent
  },
  {
    path: 'show-image/:id', component: ShowImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
