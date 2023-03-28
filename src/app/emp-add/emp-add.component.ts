import { Component } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent {
  e:Employee={Eid:0,Ename:"",Salary:0,Doj:new Date(),dept:{Did:0,Dname:"",location:""},skill:[]};
 constructor(private empservice:EmpService)
 {

 }
  addnew():void
  {
    this.empservice.addemployee(this.e);
    console.log(this.e);
  }
  

}
