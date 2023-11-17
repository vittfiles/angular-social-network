import { Component, OnDestroy, OnInit } from '@angular/core';
import { Image } from '../../../../core/models/image';
import { ImagesService } from '../../../../core/services/images/images.service';
import { Observable, Subscription, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex flex-wrap sm:flex-no-wrap content-start pb-6"
  }
})
export class ShowImageComponent implements OnInit, OnDestroy{
  image?: Image;
  imageSubscription?: Subscription;

  constructor(public imgService: ImagesService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.imageSubscription = this.route.params.pipe(
      mergeMap(params => this.imgService.getImage(params['id']))
    ).subscribe(img => {
      this.image = img;
    });
  }
    
  ngOnDestroy(): void {
    if(this.imageSubscription)
      this.imageSubscription.unsubscribe();
  }
}
