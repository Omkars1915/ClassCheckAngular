import { HttpClient ,withFetch} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }
  addsubject(subjectId:number,
    subjectName:string,
    subjectCode:string,
    credits:number,
    department:string
  ):Observable<any>{
    const addsubjecturl='http://localhost:8080/subject/add-subject'
return this.http.post<any>(addsubjecturl,{subjectId,subjectName,subjectCode,credits,department})
  }

  getallsubejects():Observable<any[]>{
    const getallsubejectsurl='http://localhost:8080/subject/get-all-subjects'
    return this.http.get<any[]>(getallsubejectsurl)
  }
}
