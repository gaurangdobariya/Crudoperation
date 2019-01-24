import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';  
import { Router } from "@angular/router";  
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  tdateOfBirth : String;

  form = new FormGroup({
    emp_phnumber : new FormControl('',[Validators.required,Validators.pattern('[6789][0-9]{9}')]),
    emp_name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{1}[a-zA-Z ]{0,18}[a-zA-Z]{1}$')]),
    emp_salary : new FormControl('',[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
    emp_dob : new FormControl('',[Validators.required])

  });
  
 employee : Employee;
 err : string;
  constructor(private empService: EmployeeService,private router : Router) { 
    var currrentDate = new Date();
var currentYear = currrentDate.getFullYear();
var currentMonth = currrentDate.getMonth();
var currentDay = currrentDate.getDate();
var setmaxDate = new Date(currentYear -10, currentMonth, currentDay);

var setminDate=new Date(currentYear - 90, currentMonth, currentDay);
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate : setminDate,
        maxDate: setmaxDate,
        dateInputFormat: 'YYYY-MM-DD'
      });


  }

  ngOnInit() {
    
  }
  onAdd=()=>{
    
    if(!isNaN(parseInt(this.form.get('emp_phnumber').value,10)) && !isNaN(parseInt(this.form.get('emp_salary').value,10)))
    {
      this.err="";
      let dateOfbirth = new Date(this.form.get('emp_dob').value).toLocaleDateString('zh-Hans-CN');
      this.empService.addEmployees(this.form.get('emp_phnumber').value,this.form.get('emp_name').value,this.form.get('emp_salary').value,dateOfbirth);
    // this.empService.createUser(eid,ename,esalary,eage);  
     } 
     else
      {
          this.err = "Not Valid Data !"
      }
    };
  }