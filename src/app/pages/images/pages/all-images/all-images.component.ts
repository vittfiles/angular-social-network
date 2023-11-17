import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../../../core/models/image';
import { ImagesService } from '../../../../core/services/images/images.service';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex flex-wrap sm:flex-no-wrap content-start pb-6"
  }
})
export class AllImagesComponent implements OnInit {
  images$?: Observable<Image[]>;

  constructor(public imgService: ImagesService){}
  ngOnInit(): void {
    this.images$ = this.imgService.getImages();
  }

}
