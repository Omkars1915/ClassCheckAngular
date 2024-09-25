import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { response } from 'express';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallsubjects',
  standalone: true,
  imports: [MenuComponent,FormsModule,CommonModule],
  templateUrl: './getallsubjects.component.html',
  styleUrl: './getallsubjects.component.css'
})
export class GetallsubjectsComponent implements OnInit {
  constructor(private subjectservice:SubjectService){}
  ngOnInit(): void {
    this.getallsubejects();
  }

  subjects:any

  getallsubejects(){
    this.subjectservice.getallsubejects().subscribe((response)=>{
      this.subjects=response
    })
  }

}
