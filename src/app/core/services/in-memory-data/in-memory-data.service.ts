import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { Image } from '../../models/image';
import { Comment } from '../../models/Comment';

import { image_data } from './image-data';
import { comment_data } from './comment-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let users: User[] = [];
    let images: Image[] = [...image_data];
    let comments: Comment[] = [...comment_data];
    return { users, images, comments };
    // or { heroes: heroes, crises: crises }
  }

  genId<T extends User | Image | Comment>(myTable: T[]): string {
    console.log("generando")
    return Math.random().toString();
  }
}
