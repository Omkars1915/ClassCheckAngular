import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { UserService } from '../../services/user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [FormsModule,MenuComponent],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {

  constructor(private studntservice:StudentService, router:Router){}
  id:any
    firstName:string=''
    lastName:string=''
    email:string=''
    course:string=''
    year:any
    department:string=''
  addstudent(){
    this.studntservice.addstudent(this.id,this.firstName,this.lastName,this.email,this.course,this.year,this.department).subscribe((response)=>{
      alert("Student added successfully")
    })
  }
}
