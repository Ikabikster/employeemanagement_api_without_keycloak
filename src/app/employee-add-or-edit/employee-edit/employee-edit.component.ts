import {Component, Injector} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QualificationModel} from "../../models/qualificationModel";
import {EmployeeRequestModel} from "../../models/employeeRequest.model";
import {EmployeeAddOrEditComponent} from "../employee-add-or-edit.component";

@Component({
  selector: 'app-employee-edit',
  templateUrl: '../employee-add-or-edit.component.html',
  styleUrls: ['../employee-add-or-edit.component.scss']
})
export class EmployeeEditComponent extends EmployeeAddOrEditComponent {


  constructor(private newInjector: Injector, private route: ActivatedRoute) {
    super(newInjector);
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
