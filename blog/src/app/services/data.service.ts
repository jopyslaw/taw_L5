import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import DataModel from '../models/dataModel.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.url + '/api/posts');
  }

  getById(id: string): Observable<DataModel> {
    return this.http.get<DataModel>(this.url + '/api/post/' + id);
  }
}
