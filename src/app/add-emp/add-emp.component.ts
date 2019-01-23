import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';  
import { Router } from "@angular/router";  
import { from } from 'rxjs';
import { isNumber } from 'util';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {


  form = new FormGroup({
    emp_phnumber : new FormControl('',[Validators.required,Validators.pattern('[6789][0-9]{9}')]),
    emp_name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{1}[a-zA-Z ]{0,18}[a-zA-Z]{1}$')]),
    emp_salary : new FormControl('',[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
    emp_age : new FormControl('',[Validators.required,Validators.pattern('[0-1]{1}[0-9]{0,2}')])

  });
 employee : Employee;
 err : string;
  constructor(private empService: EmployeeService,private router : Router) { }

  ngOnInit() {
    
  }
  onAdd=()=>{
    
    //this.empService.createUser(eid,ename,esalary,eage);
   // this.employee.id=parseInt(eid);
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_name=ename;
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_salary=parseInt(esalary);
    // console.log(eid,ename,esalary,eage);

    // this.employee.employee_age=parseInt(eage);
    // console.log(eid,ename,esalary,eage);


    //console.log("this is data to insert",this.employee);
    if(!isNaN(parseInt(this.form.get('emp_phnumber').value,10)) && !isNaN(parseInt(this.form.get('emp_age').value,10)) && !isNaN(parseInt(this.form.get('emp_salary').value,10)))
    {
      this.err="";
      console.log("value of the emp_phnumber"+this.form.get('emp_phnumber').value);
      this.empService.addEmployees(this.form.get('emp_phnumber').value,this.form.get('emp_name').value,this.form.get('emp_salary').value,this.form.get('emp_age').value);
    // this.empService.createUser(eid,ename,esalary,eage);  
     } 
     else
      {
          this.err = "Not Valid Data !"
      }
    };
  }