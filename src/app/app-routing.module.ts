import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import {UpdateEmpComponent} from './update-emp/update-emp.component'
  
export const routes: Routes = [  
  { path: '', component: ListEmpComponent, pathMatch: 'full' },  
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'update-emp', component: UpdateEmpComponent}  
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: []  
})  
export class AppRoutingModule { }  
