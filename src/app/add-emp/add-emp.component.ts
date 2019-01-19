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
    emp_id : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    emp_name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
    emp_salary : new FormControl('',[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
    emp_age : new FormControl('',[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){1,3}')])

  });
 employee : Employee;
 err : string;
  constructor(private empService: EmployeeService,private router : Router) { }

  ngOnInit() {
    
  }
  add(){
    
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
    if(!isNaN(parseInt(this.form.get('emp_id').value,10)) && !isNaN(parseInt(this.form.get('emp_age').value,10)) && !isNaN(parseInt(this.form.get('emp_salary').value,10)))
    {
      this.err="";
      console.log("value of the emp_id"+this.form.get('emp_id').value);
      this.empService.createUser(this.form.get('emp_id').value,this.form.get('emp_name').value,this.form.get('emp_salary').value,this.form.get('emp_age').value);
    // this.empService.createUser(eid,ename,esalary,eage);  
     } 
     else
      {
          this.err = "Not Valid Data !"
      }
    }
  }