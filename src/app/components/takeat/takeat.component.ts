import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ShowAllAttendance } from '../../models/showallattendance/showallattendance.module';
import { Student } from '../../models/student.module';
import { AttendanceService } from '../../services/attendance.service';
import { response } from 'express';

@Component({
  selector: 'app-takeat',
  standalone: true,
  imports: [MenuComponent,FormsModule,CommonModule],
  templateUrl: './takeat.component.html',
  styleUrl: './takeat.component.css'
})
export class TakeatComponent {


  selectedIds: number[] = [];
  selectedStudents:any;
  selectedSubject!: number;
  selectedDate!: string;
  selectedTime!: string;
  counts!: number;
  selectedFaculty: any;
  attendanceService: any;



  onFacultyChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selecteduser = String(selectElement.value);
  }

  onTimeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTime = selectElement.value;
  }

  onDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedDate = inputElement.value;
  }

  constructor(private subjectservice:SubjectService,
    private studentservice:StudentService,
    private userservice:UserService,
    private router:Router,
    private attendanceserive:AttendanceService
  ){}
  ngOnInit(): void {
    this.getallsubejects();
    this.getallstudents()
    this.getallusers()
  }
  subjects:any
  
  getallsubejects(){
    this.subjectservice.getallsubejects().subscribe((response)=>{
      this.subjects=response
    })
  }
  students: any;
  getallstudents():void{
    this.studentservice.getallstudents().subscribe((data)=>{
      this.students=data
    })
  }
  
  selecteduser:any
  users:any[]=[];
  getallusers(){
    this.userservice.getallusres().subscribe((response)=>{
      this.users=response
      
    })
  }

 
  submitAttendance() {
    this.selectedIds = this.students
      .filter((student: { isSelected: any; }) => student.isSelected)
      .map((student: { id: any; }) => student.id);
      
    const attendanceRecord: ShowAllAttendance = {
      username: this.selecteduser,
      subId: this.selectedSubject,
      date: this.selectedDate,
      time: this.selectedTime,
      rollNo: this.selectedIds,
      counts: this.selectedIds.length
    };

  

  this.attendanceserive.takeattendance(attendanceRecord).subscribe((response)=>{
alert("Attendance Submmoted")
this.router.navigate(['/viewattendance'])
  })
}
}

