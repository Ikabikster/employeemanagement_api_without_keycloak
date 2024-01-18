import {Component} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {EmployeeResponseModel} from "../models/employeeResponse.model";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employees$!: EmployeeResponseModel[];

  constructor(private employeeService: EmployeeService, private confirmationService: ConfirmationService) {

    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchAllEmployees().subscribe(employees => {
      this.employees$ = employees;
    });
  }

  deleteDialog(employee: EmployeeResponseModel) {
    this.confirmationService.confirm({
      message: "Möchten Sie den Eintrag wirklich löschen?",
      header: employee.id + " " + employee.firstName + " " + employee.lastName,
      acceptLabel: "Ja",
      accept: () => {
        this.employeeService.deleteEmployee(employee.id!).subscribe(() => {
          this.fetchEmployees();
        });
      },
      rejectLabel: "Nein"
    })
  }

}
