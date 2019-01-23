import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../service/employee.service';  
import { Employee } from '../model/employee';  
import { Router } from "@angular/router"; 
import { FormGroup,FormControl,Validators, FormGroupName } from '@angular/forms';
import{ DatePipe} from '@angular/common';
  import { from } from 'rxjs';

  
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
  objDate = Date.now(); 
  employees: Employee[];  
  uSelected: boolean[]=[];
  index :number;
  key: string = 'employee_name'; //set default
  reverse: boolean = false;//false
  p: number=3;
  kSelected : number;

  form = new FormGroup({
      emp_phnumber : new FormControl(this.tEmpid,[Validators.required,Validators.pattern('[6789][0-9]{9}')]),
      emp_name : new FormControl(this.tEmpname,[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
      emp_salary : new FormControl(this.tEmpsalary,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
      emp_age : new FormControl(this.tEmpage,[Validators.required,Validators.pattern('[0-1]{1}[0-9]{0,2}')])
  });
  
  
  constructor(private empService: EmployeeService, private router: Router ) { }  
  
  ngOnInit() { 
   // this.employees=this.empService.employeeData;
   this.empService.getEmployees().subscribe( data => this.employees = data );
   for(let i=0;i<this.employees.length;i++){
          this.uSelected[i]=true;
        }

     }
     
  sort=(key)=>{
      this.key = key;
      this.reverse = !this.reverse;
    };

  onUpdate=(index: number,u_id :number)=>{
      let eIndex=this.findEmployeeIndex(u_id);
      if(this.kSelected==u_id){
        this.empService.empSelected=eIndex;
        this.empService.updateEmployees(this.form.get("emp_phnumber").value,this.form.get("emp_name").value,this.form.get("emp_salary").value,this.form.get("emp_age").value);
        this.kSelected=null;
      }else{


        this.kSelected=u_id;
        
         this.form = new FormGroup({
          emp_phnumber : new FormControl(this.employees[eIndex].employee_phnumber,[Validators.required,Validators.pattern('[0-9]+')]),
          emp_name : new FormControl(this.employees[eIndex].employee_name,[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')]),
          emp_salary : new FormControl(this.employees[eIndex].employee_salary,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){3,}')]),
          emp_age : new FormControl(this.employees[eIndex].employee_age,[Validators.required,Validators.pattern('([1-9])+(?:-?\\d){1,3}')])});
        //this.empService.updateEmployee(this.employees[index].id,this.employees[index].employee_name,this.employees[index].employee_salary,this.employees[index].employee_age);
      }
      //console.log("onselect called"+index);
     };  

    
  onDelete=(u_id:number)=>{
       this.index=this.findEmployeeIndex(u_id);
    };
  onDeleteaction=()=>{
      //console.log(this.index);
     this.empService.deleteEmployees(this.index);
   };


  findEmployeeIndex=(u_id : number)=>{
    //console.log(u_id);
    let i = this.employees.findIndex(x => x.u_id==u_id);
    //console.log("index by"+i);
    return i;
   };
  
} 