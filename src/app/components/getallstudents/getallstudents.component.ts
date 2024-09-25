import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MenuComponent } from "../menu/menu.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallstudents',
  standalone: true,
  imports: [MenuComponent,FormsModule,CommonModule],
  templateUrl: './getallstudents.component.html',
  styleUrl: './getallstudents.component.css'
})
export class GetallstudentsComponent implements OnInit {
  students:any[]=[]
  constructor(private studentservice:StudentService) { }
  ngOnInit(): void {
    this.getallstudents();
  }

  getallstudents():void{
    this.studentservice.getallstudents().subscribe((data)=>{
      this.students=data
    })
  }}

