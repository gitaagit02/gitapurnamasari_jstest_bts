import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://18.139.50.74:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getallChecklist(): Observable<any> {
    return this.http.get(API_URL + 'checklist', { responseType: 'text' });
  }

  getChecklistById(id): Observable<any> {
    return this.http.get(API_URL + 'item/' + id, { responseType: 'text' });
  }

  deleteListByid(id): Observable<any> {
    return this.http.delete(API_URL + 'item/' + id, { responseType: 'text' });
  }
}
