import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  tEmpid: number = 1;
  tEmpname: string = 'ab';
  tEmpsalary: number = 1234;
  tEmpage: number = 123;
  objDate = Date.now();
  employees: Employee[];
  uSelected: boolean[] = [];
  index: number;
  key: string = 'employee_name'; //set default
  reverse: boolean = false;//false
  p: number = 3;
  kSelected: number;
  dSelected :string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  tdateOfBirth : String;

  form = new FormGroup({
    emp_phnumber: new FormControl(this.tEmpid, [Validators.required, Validators.pattern('[6789][0-9]{9}')]),
    emp_name: new FormControl(this.tEmpname, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
    emp_salary: new FormControl(this.tEmpsalary, [Validators.required, Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
    emp_dob: new FormControl(this.tEmpage, [Validators.required, Validators.pattern('[0-1]{1}[0-9]{0,2}')])
  });


  constructor(private empService: EmployeeService, private router: Router) { 
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
    this.empService.getEmployees().subscribe(data => this.employees = data);
    for (let i = 0; i < this.employees.length; i++) {
      this.uSelected[i] = true;
    }
  }

  sort = (key) => {
    this.key = key;
    this.reverse = !this.reverse;
  };

  onUpdate = (index: number, u_id: number) => {
    let eIndex = this.findEmployeeIndex(u_id);
    if (this.kSelected == u_id) {
      this.empService.empSelected = eIndex;
      let dateOfbirth = new Date(this.form.get('emp_dob').value).toLocaleDateString('zh-Hans-CN');
      this.empService.updateEmployees(this.form.get("emp_phnumber").value, this.form.get("emp_name").value, this.form.get("emp_salary").value,dateOfbirth);
      this.kSelected = null;
    } else {
      this.kSelected = u_id;
      this.form = new FormGroup({
        emp_phnumber: new FormControl(this.employees[eIndex].employee_phnumber, [Validators.required, Validators.pattern('[0-9]+')]),
        emp_name: new FormControl(this.employees[eIndex].employee_name, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
        emp_salary: new FormControl(this.employees[eIndex].employee_salary, [Validators.required, Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
        emp_dob: new FormControl(this.employees[eIndex].employee_dob, [Validators.required])
      });
    }
  };

  onCancel =() =>{
      this.kSelected=null;
  };


  onDelete = (u_id: number) => {    
    this.index = this.findEmployeeIndex(u_id);
    this.dSelected=this.employees[this.index].employee_name;
  };

  onDeleteaction = () => {
    this.empService.deleteEmployees(this.index);
  };

  findEmployeeIndex = (u_id: number) => {
    let i = this.employees.findIndex(x => x.u_id == u_id);
    return i;
  };

} 