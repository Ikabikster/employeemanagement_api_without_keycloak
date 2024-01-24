import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {EmployeeAddComponent} from "./employee-add-or-edit/employee-add/employee-add.component";
import {EmployeeEditComponent} from "./employee-add-or-edit/employee-edit/employee-edit.component";

const invalidRoute: Route = {
  path: "**",
  redirectTo: "/employee"
}

const employeeListRoute: Route = {
  path: 'employee',
  component: EmployeeListComponent
}

const employeeDetailsRoute: Route = {
  path: 'employee/:id',
  component: EmployeeDetailsComponent
}

const employeeEditRoute: Route = {
  path: 'employee/edit/:id',
  component: EmployeeEditComponent
}

const employeeAddRoute: Route = {
  path: `employee/add`,
  component: EmployeeAddComponent
}

const routes: Routes = [
  employeeEditRoute, employeeAddRoute, employeeDetailsRoute, employeeListRoute, invalidRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
