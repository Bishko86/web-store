import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { IAuthCredentials } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({email, password}: IAuthCredentials): Observable<User> {
    return this.http.post<User>('/login', { email, password });
  }

  registrate({username, email, password}: IAuthCredentials): Observable<any> {
    return this.http.post<any>('/registrate', { username, email, password });
  }

  logout(userId: string): Observable<any> {
    return this.http.get(`/logout${userId}`);
  }
}
