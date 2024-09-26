import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  adduser(user:User):Observable<any>{
      const adduserurl='http://localhost:8080/user/add-user';
return this.http.post<User>(adduserurl,user)
  }

  getallusres():Observable<any[]>{
    const getallusersurl='http://localhost:8080/user/get_all-users'
    return this.http.get<any[]>(getallusersurl)
  }

  deleteuser(username:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/user/delete-user-by-id/${username}`);
  }

  getuser(username:string):Observable<any>{
    const getuserurl=`http://localhost:8080/user/get-user-by-name/${username}`
  return this.http.get(getuserurl)
  }

  updateuser(username:String,
    password: String,
    firstName:String,
    lastName: String,
    role: String, 
    email: String):Observable<any>{
      const updateuserurl='http://localhost:8080/user/update-user'
      return this.http.put(updateuserurl,{username,firstName,lastName,password,email,role})
    }
}
