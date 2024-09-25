import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginUser(username: string, password: string):Observable<any>{
    const url = 'http://localhost:8080/user/login-user';
    return this.http
      .post<any>(url, { username, password })
  }
}
