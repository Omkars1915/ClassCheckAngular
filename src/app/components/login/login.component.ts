import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { log } from 'console';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { provideHttpClient ,withFetch} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  username:any;
  password:any;
  constructor( private loginservice:LoginService, private router:Router){
  }

  loginUser(){
    if(this.username && this.password){
      this.loginservice.loginUser(this.username,this.password).subscribe((resp)=>{
        if(resp!=null){
          localStorage.setItem("username",this.username)
        
          this.router.navigate(['/home'])
        }else{
          alert("Invalid Credientials")
        }
      })
    }
  }
}
