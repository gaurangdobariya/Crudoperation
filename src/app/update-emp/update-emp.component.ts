import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';  
import { Router } from "@angular/router";  

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  employee : Employee;

  eId:number;
  eName:string;
  eSalary:number;
  eAge:number;
  err :string;

  constructor(private empService: EmployeeService,private router : Router) { }


  ngOnInit() {
    this.eId=1;
    console.log(this.eId);

    this.eId=this.empService.employeeData[this.empService.empSelected].id;
    console.log(this.eId);
    this.eName=this.empService.employeeData[this.empService.empSelected].employee_name;
    this.eSalary=(this.empService.employeeData[this.empService.empSelected].employee_salary);
    this.eAge=(this.empService.employeeData[this.empService.empSelected].employee_age)


  }
  update(eid :string, ename : string ,esalary : string, eage:string){
    console.log(eid,ename,esalary,eage);
   // this.employee.id=parseInt(eid);
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_name=ename;
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_salary=parseInt(esalary);
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_age=parseInt(eage);
    // console.log(eid,ename,esalary,eage);


    //console.log("this is data to insert",this.employee);

   // this.empService.updateEmployee(eid,ename,esalary,eage);  
    if(ename != null && eid != null && eage !=null && esalary!=null && !isNaN(parseInt(eid,10)) && !isNaN(parseInt(eage,10)) && !isNaN(parseInt(esalary,10)))
    {
      this.err="";
     // this.empService.updateEmployee(eid,ename,esalary,eage);  
    } 
     else
      {
          this.err = "Not Valid Data !"
      }
    }
}
