import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {


  constructor(private http: HttpClient) {

  }

  getNews(): Observable<any> {
    return this.http.get('http://localhost:3000/news');
  }

  createNews(data: any): Observable<any> {
    return this.http.post('https://localhost:3000/news', data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    );
  }
}