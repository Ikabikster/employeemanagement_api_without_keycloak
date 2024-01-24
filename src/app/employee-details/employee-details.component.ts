import {Component, Injector} from '@angular/core';
import {EmployeeResponseModel} from "../models/employeeResponse.model";
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {ToastService} from "../services/toast.service";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  employee$!: EmployeeResponseModel;
  employees$!: EmployeeResponseModel[];

  protected router: Router;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private confirmationService: ConfirmationService, private  toastService: ToastService, private injector: Injector) {
  const id: number = route.snapshot.params['id'];
  this.fetchEmployee(id);
  this.router = injector.get(Router)
  }

  fetchEmployees() {
    this.employeeService.fetchAllEmployees().subscribe(employees => {
      this.employees$ = employees;
    });
  }

  fetchEmployee(id: number) {
    this.employeeService.fetchSingleEmplyeeWithId(id).subscribe(employee => {
      this.employee$ = employee;
    });
  }

  deleteDialog(employee: EmployeeResponseModel) {
    this.confirmationService.confirm({
      message: "Möchten Sie den Eintrag wirklich löschen?",
      header: employee.firstName + " " + employee.lastName,
      icon:"none",
      rejectLabel: "Ja",
      rejectButtonStyleClass: "p-button-info p-button-outlined",
      rejectIcon: "pi pi-check",
      closeOnEscape: false,
      reject: () => {
        this.employeeService.deleteEmployee(employee.id!).subscribe({
          next: () => {
            this.router.navigate(["employee"])
            this.fetchEmployees();
            this.toastService.addSuccessMessageForAction("gelöscht")
          },
          error: (err) => {
            this.toastService.addErrorMessageForAction("löschen", err.message)
          },
        })
        ;
      },
      acceptButtonStyleClass: "p-button-warning p-button-outlined",
      acceptLabel: "Nein",
      acceptIcon: "pi pi-times"
    })
  }
}
