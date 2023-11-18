import { Injectable } from '@angular/core';
import { Image } from '../../models/image';
import { Observable, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  url: string = 'api/images';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url).pipe(
      map(data => data.sort((a,b)=> (new Date(a.timestamp).getTime() < new Date(b.timestamp).getTime())? 1 : -1))
    );
  }
  getImage(id: string): Observable<Image>{
    return this.http.get<Image>(this.url+"/"+id);
  }
  getMostComment(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url).pipe(
      map(data => data.sort((a: Image,b: Image)=> (a.comments < b.comments)? 1 : -1).slice(0,6))
    );
  }
  setImage(data: any): any{
    return this.http.post(this.url,data,this.httpOptions);
  }
  updateImage(data: Image): any{
    return this.http.put(this.url,data,this.httpOptions);
  }
}
