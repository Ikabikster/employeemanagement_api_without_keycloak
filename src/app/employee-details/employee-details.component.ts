import {Component} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee$!: EmployeeModel;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    const id: number = route.snapshot.params['id'];
    this.fetchEmployee(id);
  }

  fetchEmployee(id: number) {
    this.employeeService.fetchSingleEmplyeeWithId(id).subscribe(employee => {
      this.employee$ = employee;
    });
  }
}
