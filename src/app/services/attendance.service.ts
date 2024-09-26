import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowAllAttendance } from '../models/showallattendance/showallattendance.module';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  viewattendance():Observable<any>{
    const viewattendanceurl='http://localhost:8080/attendance/view-attendance'
    return this.http.get<any>(viewattendanceurl)
  }
  takeattendance(showallattendance:ShowAllAttendance):Observable<any>{
    const takeattendaceurl='http://localhost:8080/attendance/take-attendance'
    return this.http.post<any>(takeattendaceurl,showallattendance)
  }
}
