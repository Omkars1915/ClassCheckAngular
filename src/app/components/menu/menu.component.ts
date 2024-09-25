import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  // constructor(private userservice:UserService, private router:Router){}
  // users:any[]=[];
  // getallusers(){
  //   this.userservice.getallusres().subscribe((response)=>{
  //     this.users=response
  //     this.router.navigate(['/admin-dashboard']);
  //   })
  // }
}
