import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Token } from '../models/token.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3001/api';

  authencitate(credentials: any): Observable<any> {
    return this.http
      .post(this.url + '/user/auth', {
        login: credentials.login,
        password: credentials.password,
      })
      .pipe(
        map((result: Token | any) => {
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            return true;
          }
          return false;
        })
      );
  }

  createOrUpdate(credentials: any) {
    console.log(credentials);
    return this.http.post(this.url + '/user/create', credentials);
  }

  logout() {
    return this.http
      .delete(this.url + '/user/logout/' + this.currentUser.userId)
      .pipe(
        map(() => {
          localStorage.removeItem('token');
        })
      );
  }
  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !jwtHelper.isTokenExpired(token);
  }
  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
