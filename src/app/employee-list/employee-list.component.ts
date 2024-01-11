import {Component} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {EmployeeModel} from "../models/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees$!: EmployeeModel[];

  constructor(private employeeService: EmployeeService) {

    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchAllEmployees().subscribe(employees => {
      this.employees$ = employees;
    });
  }


}
