import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService 
{
  token:string;
  userlist:User[];
  currentuser:any;

  constructor(private route:Router,private userservice:UserService) { }
  getusertoken(empdeatils:User)
  {
    {{debugger}}
    this.userlist=this.userservice.getalluser();
    this.currentuser=this.userlist.filter(x=>x.username==empdeatils.username&&x.password==empdeatils.password);
    console.log(this.currentuser);
    if(this.currentuser.length>0)
    this.token="validuser";
    else
    this.token="";

  }
  SaveToken()
  {
    localStorage.setItem("token",this.token);
  }

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  getToken()
  {
    return localStorage.getItem("token")||'';
  }
}
