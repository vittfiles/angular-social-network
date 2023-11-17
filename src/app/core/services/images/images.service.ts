import { Injectable } from '@angular/core';
import { Image } from '../../models/image';
import { Observable, of } from 'rxjs';

let imgData = [
  {
      "_id": "6432f79ed2602649cc2e31d8",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "sdfg",
      "description": "asdfasdfas",
      "filename": "gjsfwXjBZHkxwjO9Io8c",
      "comments": 3,
      "views": 0,
      "likes": 0,
      "type": 1,
      "timestamp": "2023-04-09T17:36:30.247Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e451665f66056574a3067",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "mi5FUH1YDulb9QGXm1nu",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 0,
      "timestamp": "2023-04-06T04:05:42.698Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e412cd5b15a35355e7534",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "Eewn8e3o2fB2jW7u7pFO",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 1,
      "timestamp": "2023-04-06T03:49:00.122Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e40ced5b15a35355e7522",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "I9UAyudDk35cA7TQPku7",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 1,
      "timestamp": "2023-04-06T03:47:26.796Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e40b6d5b15a35355e7513",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "KUOazR9IZvXjZOJH4qns",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 2,
      "timestamp": "2023-04-06T03:47:02.727Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e4085d5b15a35355e7504",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "pkLu0lafE9IkbROodSNb",
      "comments": 2,
      "views": 0,
      "likes": 0,
      "type": 2,
      "timestamp": "2023-04-06T03:46:13.012Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e3ba9d5b15a35355e74b4",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "sillon",
      "description": "asdfasd",
      "filename": "ohOdDzeM7qU64tKr1bXm",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 2,
      "timestamp": "2023-04-06T03:25:29.473Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "642e3b2bd5b15a35355e74a2",
      "user_id": "642b6c97ed78e31839c2249e",
      "user_name": "Matias Nicolas",
      "title": "",
      "description": "",
      "filename": "ssRgNVYA1CzSuFStVyF2",
      "comments": 0,
      "views": 0,
      "likes": 0,
      "type": 1,
      "timestamp": "2023-04-06T03:23:23.286Z",
      "__v": 0,
      "local": false
  }
];

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images: Image[] = imgData;

  constructor() { }

  getImages(): Observable<Image[]>{
    return of(this.images);
  }
  getImage(id: string): Observable<Image>{
    let image = this.images.find(img=> img._id === id)
    return of(image as Image);
  }
  getMostComment(): Observable<Image[]>{
    let result: Image[] = [...this.images];
    result = result.sort((a: Image,b: Image)=> (a.comments < b.comments) ? 1 : -1).slice(0, 6);
    return of(result);
  }
}
