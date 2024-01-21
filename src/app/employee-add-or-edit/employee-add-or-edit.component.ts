import {Directive, Injector} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeRequestModel} from "../models/employeeRequest.model";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast.service";


@Directive({
  selector: 'app-employee-add-or-edit',
})
export abstract class EmployeeAddOrEditComponent {
  protected actionType: string = "";
  protected doneActionType: string = "";
  protected employeeForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl('', [Validators.minLength(5), Validators.maxLength(5)]),
    city: new FormControl(''),
    phone: new FormControl(''),
    skillSet: new FormControl([])
  })
  protected employeeService: EmployeeService;
  protected toastService: ToastService;
  protected router: Router;

  protected constructor(injector: Injector) {
    this.employeeService = injector.get(EmployeeService);
    this.toastService = injector.get(ToastService);
    this.router = injector.get(Router)
  }

  submitForm() {
    const newEmployee: EmployeeRequestModel = this.employeeForm.value;
    this.employeeService.addNewEmployee(newEmployee).subscribe({
        next: () => {
          this.router.navigate(["employee"])
          this.toastService.addSuccessMessageForAction(this.doneActionType)

        },
        error: err => {
          this.toastService.addErrorMessageForAction(this.actionType, err.message)
        }
      }
    );

  }
}
