import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {EmployeeService} from "../services/employee.service";
import {EmployeeModel} from "../models/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees$: Observable<EmployeeModel[]>;

  constructor(private employeeService: EmployeeService) {
    this.employees$ = of([]);
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employees$ = this.employeeService.fetchAllEmployees();
  }

}
