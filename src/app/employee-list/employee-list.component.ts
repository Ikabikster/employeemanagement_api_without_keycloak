import {Component} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {EmployeeResponseModel} from "../models/employeeResponse.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employees$!: EmployeeResponseModel[];

  constructor(private employeeService: EmployeeService) {

    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchAllEmployees().subscribe(employees => {
      this.employees$ = employees;
    });
  }


}
