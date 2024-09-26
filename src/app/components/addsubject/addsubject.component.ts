import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from '../../models/subject.module';

@Component({
  selector: 'app-addsubject',
  standalone: true,
  imports: [MenuComponent,FormsModule],
  templateUrl: './addsubject.component.html',
  styleUrl: './addsubject.component.css'
})
export class AddsubjectComponent {

  constructor(private subjectservice:SubjectService,private router:Router){}
  subject:Subject={
    subjectId: 0,
    subjectName: '',
    subjectCode: '',
    credits: 0,
    department: ''
  }
  addsubject(){
    this.subjectservice.addsubject(this.subject).subscribe((response)=>{
      alert("Subject Added successfully")
    })
  }
}
