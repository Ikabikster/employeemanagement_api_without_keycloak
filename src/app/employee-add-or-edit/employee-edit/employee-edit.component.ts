import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeModel} from "../../models/employee.model";
import {ActivatedRoute} from "@angular/router";
import {QualificationModel} from "../../models/qualificationModel";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
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
    const employeeToUpdate: EmployeeModel = this.employeeForm.value;
    if (this.employeeForm.get("skillSet")?.value) {
      const qualifications : QualificationModel[] = this.employeeForm.get("skillSet")?.value ;
      qualifications.forEach(qualification => {
        employeeToUpdate.requestSkillSet?.push(qualification.id!)
      });
    }
    const idToUpdate: number = this.route.snapshot.params["id"];
    this.employeeService.updateEmployee(idToUpdate, employeeToUpdate).subscribe();
  }
}
