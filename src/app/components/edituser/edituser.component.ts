import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [MenuComponent,FormsModule,CommonModule,RouterModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent implements OnInit {


constructor(private userservice:UserService,
  private activatedRoute:ActivatedRoute,
private router:Router){}

  ngOnInit(): void {
    this.getuser()
  }
selected:any

  username: String = '';
  password: String = '';
  firstName: String = '';
  lastName: String = '';
  role: String = '';
  email: String = '';
getuser() {
  this.selected=this.activatedRoute.snapshot.paramMap.get('username')
  
  this.userservice.getuser(this.selected).subscribe((response)=>{
    this.username=response.username
    this.password=response.password
    this.firstName=response.firstName
    this.lastName=response.lastName
    this.email=response.email
    this.role=response.role

  })

}
updateuser() {
  this.userservice.updateuser(this.username, 
    this.password, 
    this.firstName, 
    this.lastName, 
    this.role, 
    this.email).subscribe((response) => {
  this.router.navigate(['/getallusers'])
  })
  } 
}