import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";  
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import { EmployeeService } from './service/employee.service';  
import { from } from 'rxjs';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
  
@NgModule({  
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent, UpdateEmpComponent  
  ],  
  imports: [  
    BrowserModule,  // deleteEmployees(id: number) {  
      //   return this.http.delete<Employee[]>(this.baseUrl + id);  
      // }  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule  
  ],  
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  