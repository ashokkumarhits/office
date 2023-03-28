import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  a:number=0;
  b:number=0;
  c:number=0;
  d:string="ashok";
  photo:string="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80";
  

  constructor()
  {
    
  }
  ngOnInit(): void {
  }
  add():void{
    this.c=this.a+this.b;

  }

}
