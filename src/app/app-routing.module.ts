import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';//new
import { EmployeesComponent } from './employees/employees.component';//new

const routes: Routes = [
  { path: 'datatable', component: DataTableComponent},//new
  { path: 'employees', component: EmployeesComponent},//new
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DataTableComponent, EmployeesComponent]
