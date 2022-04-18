import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

interface IRegistrCreds {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({email, password}: {email: string; password: string}): Observable<User> {
    return this.http.post<User>('/login', { email, password });
  }

  registrate({username, email, password}: IRegistrCreds): Observable<any> {
    return this.http.post<any>('/registrate', { username, email, password });
  }

  logout(userId: string): Observable<any> {
    return this.http.get(`/logout${userId}`);
  }
}
