import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="FirstAngular"
  flag=false;
  username:string;
  local:any;
  constructor(public authservice:AuthserviceService)
  {
    
    
  }
  logout()
  {
    this.authservice.Logout();
  }
  ngOnInit(): void {
    this.local=localStorage;
  }
}

