import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ɵresolveComponentResources } from '@angular/core';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getallusers',
  standalone: true,
  imports: [MenuComponent,CommonModule,RouterModule,FormsModule],
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.css'
})
export class GetallusersComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router){}
  ngOnInit(): void {
    this.getallusers()
  }

 selecteduser:any
  users:any[]=[];
  ogOnInit(){
    this.getallusers();
  }
  getallusers(){
    this.userservice.getallusres().subscribe((response)=>{
      this.users=response
  
    })
  }
  deleteuser(username:string):void{
    this.userservice.deleteuser(username).subscribe((response)=>{
      this.users = this.users.filter(user => user.id !== username);
      alert('User deleted successfully');
      // window.location.href='/getallusers'
      window.location.reload()
      // this.router.navigate(['/getallusers'])
    })
  }
}
