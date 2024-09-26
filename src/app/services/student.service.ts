import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAllStudents() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  addstudent(student:Student
  ):Observable<any>{
    const addstudenturl='http://localhost:8080/student/add-student'
    return this.http.post<any>(addstudenturl,student)
  } 
  
  getallstudents():Observable<any[]>{
    const getallstudentsurl='http://localhost:8080/student/get-all-students'
    return this.http.get<any[]>(getallstudentsurl)

  }
}
