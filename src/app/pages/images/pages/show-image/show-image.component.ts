import { Component, OnDestroy, OnInit } from '@angular/core';
import { Image } from '../../../../core/models/image';
import { Comment } from '../../../../core/models/Comment';
import { ImagesService } from '../../../../core/services/images/images.service';
import { Subscription, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../../../core/services/comments/comments.service';

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
  comments: Comment[] = [];

  constructor(
    public imgService: ImagesService,
    public commService: CommentsService, 
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.imageSubscription = this.route.params.pipe(
      mergeMap(params => this.imgService.getImage(params['id']))
    ).subscribe(img=>{
      this.image = img;
    });
    /* this.imageSubscription = this.route.params.pipe(
      mergeMap(params => this.imgService.getImage(params['id'])),
      mergeMap(img=>{
        this.image = img;
        return this.commService.getByImageId(img._id);
      })
    ).subscribe(comments => {
      this.comments = comments;
    }); */
  }
  
/*   timeAgo(date: any): string{
    let d: number = (new Date(date)) as any;
    let now: number = (new Date()) as any;
    const seconds = Math.floor((now - d) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + ' years ago';
    }
  
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months ago';
    }
  
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days ago';
    }
  
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours ago';
    }
  
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes ago';
    }
  
    if(seconds < 10) return 'just now';
  
    return Math.floor(seconds) + ' seconds ago';
  } */
    
  ngOnDestroy(): void {
    if(this.imageSubscription)
      this.imageSubscription.unsubscribe();
  }
}
