import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private loginservice:LoginService,private router:Router) { }

     canActivate() {
       
         if(this.loginservice.isUserLoggedIn()){

             return true;
         }
         else{
             this.router.navigate([''])
             return false;
         }
     }
}