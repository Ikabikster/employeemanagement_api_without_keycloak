import {Component} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {EmployeeResponseModel} from "../models/employeeResponse.model";
import {ConfirmationService} from "primeng/api";
import {ToastService} from "../services/toast.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employees$!: EmployeeResponseModel[];

  constructor(private employeeService: EmployeeService, private confirmationService: ConfirmationService, private toastService: ToastService) {
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
      header: employee.firstName + " " + employee.lastName,
      rejectLabel: "Ja",
      rejectButtonStyleClass: "p-button-info p-button-outlined p-button__gapped-icon",
      rejectIcon: "pi pi-check",
      reject: () => {
        this.employeeService.deleteEmployee(employee.id!).subscribe({
          next: () => {
            this.fetchEmployees();
            this.toastService.addSuccessMessageForAction("gelöscht")
          },
          error: (err) => {
            this.toastService.addErrorMessageForAction("löschen", err.message)
          },
        })
        ;
      },
      acceptButtonStyleClass: "p-button-warning p-button-outlined p-button__gapped-icon",
      acceptLabel: "Nein",
      acceptIcon: "pi pi-times"
    })
  }

}
