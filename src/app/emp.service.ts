import { Injectable, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService 
{
  e:Employee={Eid:1,Ename:"ashok",Salary:80000,Doj:new Date("4/3/2023"),dept:{Did:1,Dname:"admin",location:"chennai"},skill:
  [
    {skid:1,skname:"java",credits:1},
    {skid:2,skname:"python",credits:2}
  ]
};
  emps:Employee[]=[
    {Eid:1,Ename:"ashok",Salary:80000,Doj:new Date("4/3/2023"),dept:{Did:1,Dname:"admin",location:"chennai"},skill:
    [
      {skid:1,skname:"java",credits:1},
      {skid:2,skname:"python",credits:2}
    ]
  }
  ]
  constructor() { }
  getallemployees():any{
    return this.emps;
  }
  addemployee(e:Employee)
  {
    this.emps.push(e);
  }
  
}
