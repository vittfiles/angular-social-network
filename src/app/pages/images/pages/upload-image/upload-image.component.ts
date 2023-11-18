import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ImagesService } from '../../../../core/services/images/images.service';
import { Image } from '../../../../core/models/image';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { User } from '../../../../core/models/User';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex flex-wrap sm:flex-no-wrap content-start pb-6"
  }
})
export class UploadImageComponent implements OnInit, OnDestroy {
  user: User = {user_name: "",email: ""};
  notifier = new Subject();

  hidden: boolean = true;
  src: string = "";
  @ViewChild('imgFile') imgFile?: ElementRef<HTMLElement>;
  @ViewChild('imgShow') imgShow?: ElementRef<HTMLElement>;

  clickImgFile() {
    this.imgFile?.nativeElement?.click();
  }
  onChangeImgFile(e: any){
    let files: any[] = Array.from(e.target.files);
    this.showImg(files[0]);
  }
  filesDropped(e: any): void {
    this.showImg(e[0].file);
  }
  showImg(file: any){
    let imgUrl = URL.createObjectURL(file);
    this.hidden = false;
    this.src = imgUrl;
  }

  loading: boolean = false;
  errors:string[] = [];

  formUser = this.fb.group({
    title: ['', Validators.required],
    'img-file': ['', Validators.required],
    description: ['', Validators.required]
  });
  
  get title(){return this.formUser.get('title') as FormControl;}
  get description(){return this.formUser.get('description') as FormControl;}
  get imgfile(){return this.formUser.get('img-file') as FormControl;}
  
  constructor(
    private fb: FormBuilder,
    private imgService: ImagesService,
    private router: Router,
    private auth: AuthService
  ){}
  
  ngOnInit(): void {
    this.auth.userData.pipe(takeUntil(this.notifier)).subscribe(res=>this.user);
  }

  close(i: number){
    this.errors = this.errors.filter((err,index) => index !== i );
  }

  upload(){
    this.errors = [];
    if(this.formUser.valid){
      let w = this.imgShow?.nativeElement.clientWidth || 1;
      let h = this.imgShow?.nativeElement.clientHeight || 1;
      let aspect = w/h;
      let type = 1;
      if(aspect < 2/3) type = 0;
      else if(aspect > 3/2) type = 2;

      this.loading = true;

      let data = {
        user_id: "",
        user_name: this.user.user_name,
        title: this.title.value,
        description: this.description.value,
        filename: this.src,
        comments: 0,
        views: 0,
        likes: 0,
        type: type,
        timestamp: (new Date()).toISOString(),
        __v: 0,
        local: true
      };

      this.imgService.setImage(data).pipe(takeUntil(this.notifier)).subscribe((res: any)=>{
        console.log(res);
        this.loading = false;
        this.formUser.reset();
        this.router.navigateByUrl('/images/show-image/'+res.id);
      });

    }else{
      if(this.title.invalid)
      this.errors.push("Add a title");
      if(this.imgfile.invalid)
        this.errors.push("Add an image");
      if(this.description.invalid)
        this.errors.push("Add a description");
    }
  }
  
  ngOnDestroy(): void {
    this.notifier.next(true);
    this.notifier.complete();
  }
}
