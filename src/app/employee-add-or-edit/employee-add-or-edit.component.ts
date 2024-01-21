import {Directive, Injector} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeRequestModel} from "../models/employeeRequest.model";
import {EmployeeService} from "../services/employee.service";

@Directive({
  selector: 'app-employee-add-or-edit',
})
export abstract class EmployeeAddOrEditComponent {
  protected actionType: string = "";
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

  protected constructor(injector: Injector) {
    this.employeeService = injector.get(EmployeeService);
  }

  submitForm() {
    const newEmployee: EmployeeRequestModel = this.employeeForm.value;
    this.employeeService.addNewEmployee(newEmployee).subscribe();
  }
}
