import { HttpClient ,withFetch} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject.module';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  getAllSubjects() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  addsubject(subject:Subject
  ):Observable<any>{
    const addsubjecturl='http://localhost:8080/subject/add-subject'
return this.http.post<any>(addsubjecturl,subject)
  }

  getallsubejects():Observable<any[]>{
    const getallsubejectsurl='http://localhost:8080/subject/get-all-subjects'
    return this.http.get<any[]>(getallsubejectsurl)
  }
}
