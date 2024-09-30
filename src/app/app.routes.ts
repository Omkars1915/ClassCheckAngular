import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { provideHttpClient ,withFetch} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { Router } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { GetallusersComponent } from './components/getallusers/getallusers.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { GetallstudentsComponent } from './components/getallstudents/getallstudents.component';
import { AddsubjectComponent } from './components/addsubject/addsubject.component';
import { GetallsubjectsComponent } from './components/getallsubjects/getallsubjects.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { TakeattendaceComponent } from './components/takeattendace/takeattendace.component';
import { ViewattendanceComponent } from './components/viewattendance/viewattendance.component';
import { TakeatComponent } from './components/takeat/takeat.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    {
        path: '',component:LoginComponent
    },
    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'menu', component:MenuComponent
    },
    {
        path:'adduser', component:AdduserComponent,canActivate:[AuthService]
    },
    {
        path:'getallusers', component:GetallusersComponent,canActivate:[AuthService]
    },
    {
        path:'addstudent',component:AddstudentComponent,canActivate:[AuthService]
    },
    {
        path:'getallstudents',component:GetallstudentsComponent,canActivate:[AuthService]
    },
    {
        path:'addsubject',component:AddsubjectComponent,canActivate:[AuthService]
    },
    {
        path:'getallsubjects',component:GetallsubjectsComponent,canActivate:[AuthService]
    },
    {
        path:'edituser/:username',component:EdituserComponent,canActivate:[AuthService]
    },
    {
        path: 'takeattendance',component:TakeatComponent,canActivate:[AuthService]
    },
    {
        path:'viewattendance',component:ViewattendanceComponent,canActivate:[AuthService]
    }
];
