import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {QualificationModel} from "../../models/qualificationModel";
import {EmployeeRequestModel} from "../../models/employeeRequest.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {
  employeeForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl('', [Validators.minLength(5), Validators.maxLength(5)]),
    city: new FormControl(''),
    phone: new FormControl(''),
    skillSet: new FormControl([])
  })

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.getEmployeeToEdit();
  }

  getEmployeeToEdit() {
    this.employeeService.fetchSingleEmplyeeWithId(this.route.snapshot.params["id"]).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      }
    );
  }

  submitForm() {
    const employeeToUpdate: EmployeeRequestModel = this.employeeForm.value;
    if (this.employeeForm.get("skillSet")?.value) {
      const qualifications: QualificationModel[] = this.employeeForm.get("skillSet")?.value;
      employeeToUpdate.skillSet = [];
      qualifications.forEach(qualification => {
        employeeToUpdate.skillSet?.push(qualification.id!)
      });
    }
    employeeToUpdate.id = this.route.snapshot.params["id"];
    this.employeeService.updateEmployee(employeeToUpdate).subscribe();
  }
}
