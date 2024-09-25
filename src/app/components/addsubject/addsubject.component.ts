import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addsubject',
  standalone: true,
  imports: [MenuComponent,FormsModule],
  templateUrl: './addsubject.component.html',
  styleUrl: './addsubject.component.css'
})
export class AddsubjectComponent {

  constructor(private subjectservice:SubjectService,private router:Router){}
  subjectId:any
    subjectName:string=''
    subjectCode:string=''
    credits:any
    department:string=''
  addsubject(){
    this.subjectservice.addsubject(this.subjectId,this.subjectName,this.subjectCode,this.credits,this.department).subscribe((response)=>{
      alert("Subject Added successfully")
    })
  }
}
