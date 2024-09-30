import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  username=localStorage.getItem("username")
  constructor(private router:Router, private  loginService:LoginService) { }

  logout() {
    localStorage.clear();
    this.loginService.logout();
    this.router.navigate(['']);
  }
  

}
