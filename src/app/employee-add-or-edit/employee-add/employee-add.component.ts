import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeRequestModel} from "../../models/employeeRequest.model";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employeeForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl('', [Validators.minLength(5), Validators.maxLength(5)]),
    city: new FormControl(''),
    phone: new FormControl(''),
    skillSet: new FormControl([])
  })

  constructor(private employeeService: EmployeeService) {
  }

  submitForm() {
    const newEmployee: EmployeeRequestModel = this.employeeForm.value;
    this.employeeService.addNewEmployee(newEmployee).subscribe();
  }
}
