import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Image } from '../../../../core/models/image';
import { ImagesService } from '../../../../core/services/images/images.service';
import { Subscription, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../../../core/services/comments/comments.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentComponent } from '../../../../share/components/comment/comment.component';
import { Comment } from '../../../../core/models/Comment';
import { User } from '../../../../core/models/User';
import { AuthService } from '../../../../core/services/auth/auth.service';

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
  user: User = {user_name:"",email:""};
  userSubscription?: Subscription;
  @ViewChild('commentSection') private comments?: CommentComponent;

  errors:string[] = [];
  loading: boolean = false;
  formUser: FormGroup = this.fb.group({
    content: ['',Validators.required]
  });

  submit(){
    this.errors = [];
    if(this.formUser.valid && this.image){
      this.loading = true;
      this.image.comments++;
      let data = {
        user_id: "",
        image_id: this.image.id,
        image_user_id: this.image.user_id,
        content: this.formUser.get('content')?.value,
        user: this.user.user_name,
        filename: this.image.filename,
        fileext: '',
        timestamp: (new Date()).toISOString(),
        __v: 0,
        local: this.image.local
      };
      this.commService.setComment(data as Comment).pipe(
        mergeMap(r=>this.imgService.updateImage(this.image as Image))
      ).subscribe((res: any)=>{
        this.comments?.addComment({
          id: "",
          ...data
        });
        this.formUser.reset();
        this.loading = false;
      });
    }else{
      this.errors.push("Add a comment to send it");
    }
  }

  close(i: number){
    console.log("cerrar")
    this.errors = this.errors.filter((err,index) => index !== i );
  }

  constructor(
    public imgService: ImagesService,
    public commService: CommentsService, 
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService
  ){}
  
  ngOnInit(): void {
    this.imageSubscription = this.route.params.pipe(
      mergeMap(params => this.imgService.getImage(params['id']))
    ).subscribe(img=>{
      this.image = img;
    });
    this.userSubscription = this.auth.userData.subscribe(res=>this.user = res);
  }
    
  ngOnDestroy(): void {
    if(this.imageSubscription)
      this.imageSubscription.unsubscribe();
    if(this.userSubscription)
      this.userSubscription.unsubscribe();
  }
}
