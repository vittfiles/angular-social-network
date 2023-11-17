import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../core/services/images/images.service';
import { Image } from '../../../core/models/image';
import { Comment } from '../../../core/models/Comment';
import { CommentsService } from '../../../core/services/comments/comments.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  host: {
    class: "w-[85%] mx-auto sm:w-1/4 pl-3 pr-3 sm:pl-0 sm:pr-4"
  }
})
export class AsideComponent implements OnInit {
  images: Image[] = [];
  comments: Comment[] = [];

  constructor(
    public imgService: ImagesService,
    public commService: CommentsService
  ){}

  ngOnInit(): void {
    this.imgService.getMostComment().subscribe(imgs=>{
      this.images = imgs;
    });
    this.commService.getLastComments().subscribe(comm=>{
      this.comments = comm;
    });
  }

}
