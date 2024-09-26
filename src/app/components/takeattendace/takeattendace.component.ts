import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-takeattendace',
  standalone: true,
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './takeattendace.component.html',
  styleUrl: './takeattendace.component.css'
})
export class TakeattendaceComponent implements OnInit{
  
  
  constructor(private studentservive:StudentService,
    private subjectservice:SubjectService
  ) {
  }
  subjects: any[]=[];
  facultyUser: any;
  students: any;
  submitAttendance() {
    
  }
  ngOnInit(): void {
    this.getallstudents()
    this.getallsubejects
  }
  onDateChange($event: Event) {
   
  }
  selectedSubject: any;
  selectedFaculty: any;

  getallstudents():void{
    this.studentservive.getallstudents().subscribe((data)=>{
      this.students=data
    })
  }
  getallsubejects(){
    this.subjectservice.getallsubejects().subscribe((response)=>{
      this.subjects=response
    })
}
}
