import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Employee } from '../model/employee';  
import { Router } from "@angular/router";  
import {Observable,of} from 'rxjs';
import{ DatePipe} from '@angular/common';



@Injectable({  
  providedIn: 'root'  
})  
export class EmployeeService {  
  employeeData : Employee[]= [
    {"u_id": 1111111111111 ,"id":1, "employee_name":"yash", "employee_salary":50000, "employee_age":12},
    {"u_id": 2222222222222 ,"id":2,"employee_name":"john", "employee_salary":1400, "employee_age":15},
    {"u_id": 2222222222223 ,"id":3,"employee_name":"raj", "employee_salary":6000, "employee_age":17},
    {"u_id": 2222222222224 ,"id":4,"employee_name":"ketul", "employee_salary":7000, "employee_age":18},
    {"u_id": 2222222222225 ,"id":5,"employee_name":"dhruvit", "employee_salary":8000, "employee_age":19},
    {"u_id": 2222222222226 ,"id":6,"employee_name":"raj", "employee_salary":9000, "employee_age":20},
    {"u_id": 2222222222227 ,"id":7,"employee_name":"piyush", "employee_salary":1000, "employee_age":28},
    {"u_id": 2222222222228 ,"id":8,"employee_name":"rohan", "employee_salary":9000, "employee_age":24},
    {"u_id": 2222222222229 ,"id":9,"employee_name":"darshan", "employee_salary":5000, "employee_age":25},
    {"u_id": 2222222222210 ,"id":10,"employee_name":"nike", "employee_salary":5500, "employee_age":24},

    {"u_id": 3333333333333 ,"id":11,"employee_name":"jenny","employee_salary":5000,"employee_age":20}];
    empSelected : number;
    baseUrl : string = "http://localhost:3000/Employees";
  constructor(private http: HttpClient,private router: Router) { }  
  getEmployees():Observable<Employee []> {  
    //return this.employeeData;          ----------->
    return of (this.employeeData);
  //  return this.http.get<Employee[]>(this.baseUrl);  
  }  
  deleteEmployees=(index: number) => {  
    this.employeeData.splice(index,1);  
  };  
  addEmployees=(eid :string, ename : string ,esalary : string, eage:string)=> { 
    this.employeeData.push({
      u_id : Date.now(),
      id: parseInt(eid),
      employee_name : ename,
      employee_salary : parseInt(esalary),
      employee_age : parseInt(eage)
    }); 
    this.router.navigate(['/', 'list-emp']); 
  //  console.log(this.employeeData);
  };
  updateEmployees=(eid :number, ename : string ,esalary : number, eage:number)=> { 
    //this.empSelected=index; 
//console.log(eid+"------"+ename);
//console.log("id is innumber "+eid);
this.employeeData[this.empSelected].u_id=Date.now();
    this.employeeData[this.empSelected].id=eid;
    this.employeeData[this.empSelected].employee_name=ename;
    this.employeeData[this.empSelected].employee_salary=esalary;
    this.employeeData[this.empSelected].employee_age=eage;
//this.router.navigate(['/', 'list-emp']); 

    // return this.http.put(this.baseUrl + '/' + employee.id, employee);  
  };  
}  
