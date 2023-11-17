import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { Subscription } from 'rxjs';
import { Comment } from '../../../core/models/Comment';
import { Image } from '../../../core/models/image';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  host: {
    class: "w-full"
  }
})
export class CommentComponent implements OnChanges, OnDestroy{
  @Input() image?: Image;
  commentsSubscription?: Subscription;
  comments: Comment[] = [];

  constructor(public commService: CommentsService){}

  ngOnChanges():void{
    if(this.commentsSubscription)
      this.commentsSubscription.unsubscribe();
    if(this.image)
    this.commentsSubscription = this.commService.getByImageId(this.image._id).subscribe(comm => {
      this.comments = comm;
    });
  }
  
  timeAgo(date: any): string{
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
  }
    
  ngOnDestroy(): void {
    if(this.commentsSubscription)
      this.commentsSubscription.unsubscribe();
  }
}
