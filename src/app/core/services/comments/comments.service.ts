import { Injectable } from '@angular/core';
import { Comment } from '../../models/Comment'
import { Observable, delay, map, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url: string = 'api/comments';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getLastComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url).pipe(
      map(data => data.sort((a,b)=> (new Date(a.timestamp).getTime() < new Date(b.timestamp).getTime())? 1 : -1).slice(0,6))
    );
  }
  getByImageId(id: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url+'/?image_id='+id).pipe(
      map(data => data.sort((a,b)=> (new Date(a.timestamp).getTime() < new Date(b.timestamp).getTime())? 1 : -1))
    );
  }

  setComment(data:Comment): any{
    return this.http.post(this.url,data,this.httpOptions);
  }

}
