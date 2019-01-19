import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../service/employee.service';  
import { Employee } from '../model/employee';  
import { Router } from "@angular/router"; 
import { FormGroup,FormControl,Validators, FormGroupName } from '@angular/forms';

  
@Component({  
  selector: 'app-list-emp',  
  templateUrl: './list-emp.component.html',  
  styleUrls: ['./list-emp.component.css']  
})  
export class ListEmpComponent implements OnInit {  
  
  tEmpid : number =1;
  tEmpname : string='ab';
  tEmpsalary : number=1234;
  tEmpage : number=123;

  form = new FormGroup({
      emp_id : new FormControl(this.tEmpid,[Validators.required,Validators.pattern('[0-9]+')]),
      emp_name : new FormControl(this.tEmpname,[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
      emp_salary : new FormControl(this.tEmpsalary,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
      emp_age : new FormControl(this.tEmpage,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){1,3}')])
  });
  employees: Employee[];  
  uSelected: boolean[]=[];
  index :number;
  constructor(private empService: EmployeeService, private router: Router ) { }  
  
  ngOnInit() { 
   // this.employees=this.empService.employeeData;
   this.empService.getEmployees().subscribe( data => this.employees = data );
   console.log(this.employees.length);
   for(let i=0;i<this.employees.length;i++){
          this.uSelected[i]=true;
        }
     }

    onUpdate(index : number){
      if(this.uSelected[index]==false){
        this.uSelected[index]=true;
        this.empService.empSelected=index;
        this.empService.updateEmployee(this.form.get("emp_id").value,this.form.get("emp_name").value,this.form.get("emp_salary").value,this.form.get("emp_age").value);
      }else{
        console.log("now"+this.uSelected[index]);
        for(let i=0;i<this.employees.length;i++){
          this.uSelected[i]=true;
        }
        this.uSelected[index]=false;
         this.form = new FormGroup({
          emp_id : new FormControl(this.employees[index].id,[Validators.required,Validators.pattern('[0-9]+')]),
          emp_name : new FormControl(this.employees[index].employee_name,[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
          emp_salary : new FormControl(this.employees[index].employee_salary,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
          emp_age : new FormControl(this.employees[index].employee_age,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){1,3}')])});
        //this.empService.updateEmployee(this.employees[index].id,this.employees[index].employee_name,this.employees[index].employee_salary,this.employees[index].employee_age);
      }
      console.log("onselect called"+index);
     }  

    
     dEmployee(index:number){
       this.index=index;
    }
    deleteEmployee(){
      console.log(this.index);
     this.empService.deleteEmployees(this.index);
   }

  
} 