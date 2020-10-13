import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../type/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'http://localhost/larablog/public/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  postId: number;
  constructor(
    private http: HttpClient
  ) { }

  addPost(post: Post): void {
    console.log('trimit la laravel');
    this.http.post<Post>(this.apiURL + '/apiposts', JSON.stringify(post)).subscribe({
      next: data => {
        this.postId = data.id;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  getPost(id: number): Observable<any> {
    console.log('trimit la laravel');
    return this.http.get(this.apiURL + '/apiposts/' + id);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/apiposts');
  }
  update(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiURL + '/apiposts/' + id, JSON.stringify(post), this.httpOptions);
  }


  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(this.apiURL + '/apiposts/' + id, this.httpOptions);
  }
}
