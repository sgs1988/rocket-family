import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://launchlibrary.net/1.3';

  constructor(private http: HttpClient) { }
  
  getService(payload: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${payload.url}`);
  }
}
