import { department } from "./Department";
import { skills } from "./Skill";

export interface Employee
{
    Eid:number;
    Ename:string;
    Salary:number;
    Doj:Date;
    dept:department;
    skill:skills[];

}