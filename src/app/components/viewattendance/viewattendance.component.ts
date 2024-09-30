import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { Router } from '@angular/router';
import { response } from 'express';
import { AttendanceService } from '../../services/attendance.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowAllAttendance } from '../../models/showallattendance/showallattendance.module';
import { SubjectService } from '../../services/subject.service';
import { map } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-viewattendance',
  standalone: true,
  imports: [MenuComponent,FormsModule,CommonModule],
  templateUrl: './viewattendance.component.html',
  styleUrl: './viewattendance.component.css'
})
export class ViewattendanceComponent implements OnInit {
attendance: any;

  showAll: any[] = [];
  selectedSubject: any;
  subjects: any;
  selectedDate: any;
  searchDate: string = ''; 

  filteredAttendanceRecords: ShowAllAttendance[] = []; 
  constructor(
    private attendanceservice:AttendanceService,
    private subjectservice:SubjectService,
  private userservce:UserService) { }

  ngOnInit() {
    this.getallsubejects()
this.view()
   
  }
  selecteduser:any
  users:any[]=[];
  getallusers(){
    this.userservce.getallusres().subscribe((response)=>{
      this.users=response
      
    })
  }

  view(){
    this.attendanceservice
    .viewattendance().subscribe((response) => {
      this.showAll = response;
     
    });
  }
  


  getallsubejects(){
    this.subjectservice.getallsubejects().subscribe((response)=>{
      this.subjects=response
    })
}

searchAttendance(): void {
  // Filter records based on search criteria
  this.filteredAttendanceRecords = this.showAll.filter(record => {
    const matchesSubject = record.subject?.subjectName
    const matchesDate = this.searchDate ? record.date === this.searchDate : true; // Only match if date is provided
    return matchesSubject && matchesDate; // Return true if both match
  });
}
}


//   private transformData(data: any): ShowAllAttendance {

//     return {
//       id: data.id,
//       username: data.user.username,
//       date: data.date,
//       time: data.time,
//       counts: data.numberOfStudents,
//       studentNames: data.students.map((student: any) => student.username).sort(),
//       subject: data.subject.name,
//     };
//   }
// }


// showAllAttendance: ShowAllAttendance[] = [];
// selectedSubject: any;
// subjects: any;
// selectedDate: any;

// constructor(
//   private attendanceService: AttendanceService,
//   private subjectService: SubjectService
// ) {}

// ngOnInit() {
//   this.subjectService.getallsubejects().subscribe((response) => {
//     this.subjects = response;
//   });

  
//   this.attendanceService
//     .viewattendance()
//     .pipe(
//       map((response) =>
//         response.map((showAllAttendance: any) =>
//           this.transformData(showAllAttendance)
//         )
//       )
//     )
//     .subscribe((transformedData) => {
//       this.showAllAttendance = transformedData;
//     });
// }

// // searchAttendance() {
// // console.log(this.selectedDate);
// // console.log(this.selectedSubject);



// //   this.attendanceService
// //     .searchAttendanceByDate_Subject(this.selectedDate, this.selectedSubject)
// //     .pipe(
// //       map((response) =>
// //         response.map((showAllAttendance: any) =>
// //           this.transformData(showAllAttendance)
// //         )
// //       )
// //     )
// //     .subscribe((transformedData) => {
// //       this.showAllAttendance = transformedData;
// //     });
// // }

// private transformData(data: any): ShowAllAttendance {

//   return {
//     id: data.id,
//     username: data.user.username,
//     date: data.date,
//     time: data.time,
//     counts: data.counts,
//     studentNames: data.students.map((student: any) => student.username).sort(),
//     subject: data.subject.subjectName,
//   };
// }
// }