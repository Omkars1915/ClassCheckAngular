import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { UserService } from '../../services/user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule, HomeComponent, MenuComponent],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

  constructor(private userservice: UserService, private router:Router) { }

  username: String = '';
  password: String = '';
  firstName: String = '';
  lastName: String = '';
  role: String = '';
  email: String = '';
  adduser() {
    this.userservice.adduser(this.username, 
      this.password, 
      this.firstName, 
      this.lastName, 
      this.role, 
      this.email).subscribe((response) => {
      // alert("Done")
    this.router.navigate(['/getallusers'])
    })
  }
}
