import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { UserService } from '../../services/user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student } from '../../models/student.module';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [FormsModule,MenuComponent],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {

  constructor(private studntservice:StudentService,private router:Router){}
  student:Student={
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    year: 0,
    department: '',
    isSelected: false
  }
  addstudent(){
    this.studntservice.addstudent(this.student).subscribe((response)=>{
      alert("Student added successfully")
      this.router.navigate(['getallstudents'])
    })
  }
}
