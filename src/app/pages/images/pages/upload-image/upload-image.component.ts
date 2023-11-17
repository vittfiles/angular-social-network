import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  host: {
    class: "w-full sm:w-[calc(100%-5rem)] flex flex-wrap sm:flex-no-wrap content-start pb-6"
  }
})
export class UploadImageComponent {
  hidden: boolean = true;
  src: string = "";
  @ViewChild('imgFile') imgFile?: ElementRef<HTMLElement>;

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

  errors:string[] = [];

  formUser = this.fb.group({
    title: ['', Validators.required],
    'img-file': ['', Validators.required],
    description: ['', Validators.required]
  });
  
  get title(){return this.formUser.get('title') as FormControl;}
  get description(){return this.formUser.get('description') as FormControl;}
  get imgfile(){return this.formUser.get('img-file') as FormControl;}
  
  constructor(private fb: FormBuilder){}

  close(i: number){
    this.errors = this.errors.filter((err,index) => index !== i );
  }

  upload(){
    this.errors = [];
    if(this.formUser.valid){
      alert("upload")
    }else{
      if(this.title.invalid)
      this.errors.push("Add a title");
      if(this.imgfile.invalid)
        this.errors.push("Add an image");
      if(this.description.invalid)
        this.errors.push("Add a description");
    }
  }
}
