import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeService } from './service/employee.service';
import { from } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module


@NgModule({
  declarations: [
    AppComponent,
    ListEmpComponent,
    AddEmpComponent, UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,//add here
    Ng2SearchPipeModule //including into imports


  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }  