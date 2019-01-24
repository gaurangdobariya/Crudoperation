import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeData: Employee[] = [
    { "u_id": 1111111111111, "employee_phnumber": 9874563215, "employee_name": "yash", "employee_salary": 50000, "employee_dob": "2009/1/16" },
    { "u_id": 2222222222222, "employee_phnumber": 8745632194, "employee_name": "john", "employee_salary": 1400, "employee_dob": "2009/2/16" },
    { "u_id": 2222222222223, "employee_phnumber": 7456321965, "employee_name": "raj", "employee_salary": 6000, "employee_dob": "2010/1/16" },
    { "u_id": 2222222222224, "employee_phnumber": 6549871237, "employee_name": "ketul", "employee_salary": 7000, "employee_dob": "2011/1/17" },
    { "u_id": 2222222222225, "employee_phnumber": 6874521368, "employee_name": "dhruvit", "employee_salary": 8000, "employee_dob": "2009/5/18" },
    { "u_id": 2222222222226, "employee_phnumber": 9874563211, "employee_name": "raj", "employee_salary": 9000, "employee_dob": "2008/6/11" },
    { "u_id": 2222222222227, "employee_phnumber": 7544455445, "employee_name": "piyush", "employee_salary": 1000, "employee_dob": "2006/4/02" },
    { "u_id": 2222222222228, "employee_phnumber": 8787878754, "employee_name": "rohan", "employee_salary": 9000, "employee_dob": "2005/2/17" },
    { "u_id": 2222222222229, "employee_phnumber": 9781256989, "employee_name": "darshan", "employee_salary": 5000, "employee_dob": "2004/2/15" },
    { "u_id": 2222222222210, "employee_phnumber": 8745545623, "employee_name": "nike", "employee_salary": 5500, "employee_dob": "2002/2/16" },
    { "u_id": 3333333333333, "employee_phnumber": 7896541777, "employee_name": "jenny", "employee_salary": 5000, "employee_dob": "1947/5/14" }];
  empSelected: number;
  baseUrl: string = "http://localhost:3000/Employees";
  constructor(private http: HttpClient, private router: Router) { }
  getEmployees(): Observable<Employee[]> {
    //return this.employeeData;          ----------->
    return of(this.employeeData);
    //  return this.http.get<Employee[]>(this.baseUrl);  
  }
  deleteEmployees = (index: number) => {
    this.employeeData.splice(index, 1);
  };
  addEmployees = (eid: string, ename: string, esalary: string, edob: string) => {
    this.employeeData.push({
      u_id: Date.now(),
      employee_phnumber: parseInt(eid),
      employee_name: ename,
      employee_salary: parseInt(esalary),
      employee_dob: edob
    });
    this.router.navigate(['/', 'list-emp']);
    //  console.log(this.employeeData);
  };
  updateEmployees = (eid: number, ename: string, esalary: number, edob: string) => {
    //this.empSelected=index; 
    //console.log(eid+"------"+ename);
    //console.log("id is innumber "+eid);
    this.employeeData[this.empSelected].u_id = Date.now();
    this.employeeData[this.empSelected].employee_phnumber = eid;
    this.employeeData[this.empSelected].employee_name = ename;
    this.employeeData[this.empSelected].employee_salary = esalary;
    this.employeeData[this.empSelected].employee_dob = edob;
    //this.router.navigate(['/', 'list-emp']); 

    // return this.http.put(this.baseUrl + '/' + employee.id, employee);  
  };
}  
