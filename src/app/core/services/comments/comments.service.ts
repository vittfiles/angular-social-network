import { Injectable } from '@angular/core';
import { Comment } from '../../models/Comment'
import { Observable, of } from 'rxjs';

let data = [
  {
      "_id": "65564f00e1ae99ecebf57038",
      "user_id": "642b6c97ed78e31839c2249e",
      "image_id": "6432f79ed2602649cc2e31d8",
      "image_user_id": "642b6c97ed78e31839c2249e",
      "content": "asdf",
      "user": "Matias Nicolas",
      "filename": "gjsfwXjBZHkxwjO9Io8c",
      "fileext": "",
      "timestamp": "2023-11-16T17:18:56.320Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "652b19493584b671c8baaa4c",
      "user_id": "642b6c97ed78e31839c2249e",
      "image_id": "6432f79ed2602649cc2e31d8",
      "image_user_id": "642b6c97ed78e31839c2249e",
      "content": "",
      "user": "Matias Nicolas",
      "filename": "gjsfwXjBZHkxwjO9Io8c",
      "fileext": "",
      "timestamp": "2023-10-14T22:42:17.953Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "6432f7a5d2602649cc2e31de",
      "user_id": "642b6c97ed78e31839c2249e",
      "image_id": "6432f79ed2602649cc2e31d8",
      "image_user_id": "642b6c97ed78e31839c2249e",
      "content": "fhkqsdhfalkshdf",
      "user": "Matias Nicolas",
      "filename": "gjsfwXjBZHkxwjO9Io8c",
      "fileext": "",
      "timestamp": "2023-04-09T17:36:37.488Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "6432f756d2602649cc2e31c7",
      "user_id": "642b6c97ed78e31839c2249e",
      "image_id": "642e4085d5b15a35355e7504",
      "image_user_id": "642b6c97ed78e31839c2249e",
      "content": "asdfasdfv",
      "user": "Matias Nicolas",
      "filename": "pkLu0lafE9IkbROodSNb",
      "fileext": "",
      "timestamp": "2023-04-09T17:35:18.523Z",
      "__v": 0,
      "local": false
  },
  {
      "_id": "6432f74fd2602649cc2e31c0",
      "user_id": "642b6c97ed78e31839c2249e",
      "image_id": "642e4085d5b15a35355e7504",
      "image_user_id": "642b6c97ed78e31839c2249e",
      "content": "askdjfhkalsjdhf",
      "user": "Matias Nicolas",
      "filename": "pkLu0lafE9IkbROodSNb",
      "fileext": "",
      "timestamp": "2023-04-09T17:35:11.430Z",
      "__v": 0,
      "local": false
  }
]

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[] = data;

  constructor() { }

  getLastComments(): Observable<Comment[]>{
    let result: Comment[] = [...this.comments];
    result = result.sort((a,b)=> (new Date(a.timestamp) > new Date(b.timestamp))? 1 : -1).slice(0,6);
    return of(result);
  }
  getByImageId(id: string): Observable<Comment[]>{
    let result: Comment[] = [...this.comments];
    result = result.filter(comm=> comm.image_id === id);
    result = result.sort((a,b)=> (new Date(a.timestamp) < new Date(b.timestamp))? 1 : -1);
    return of(result);
  }

}
