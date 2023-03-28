import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  e:Employee={Eid:0,Ename:"",Salary:0,Doj:new Date(),dept:{Did:0,Dname:"",location:""},skill:[]};
  emps:Employee[]=[]
  constructor(private empservice:EmpService)
  {

  }
  ngOnInit(): void
   {
   this.emps=this.empservice.getallemployees();
  }
 
 
}
