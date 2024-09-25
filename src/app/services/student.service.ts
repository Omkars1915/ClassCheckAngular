import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  addstudent(id:number,
    firstName:string,
    lastName:string,
    email:string,
    course:string,
    year:number,
    department:string
  ):Observable<any>{
    const addstudenturl='http://localhost:8080/student/add-student'
    return this.http.post<any>(addstudenturl,{id,firstName,lastName,email,course,year,department})
  } 
  
  getallstudents():Observable<any[]>{
    const getallstudentsurl='http://localhost:8080/student/get-all-students'
    return this.http.get<any[]>(getallstudentsurl)

  }
}
