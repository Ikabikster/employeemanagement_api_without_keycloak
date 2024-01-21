import {Component, Injector} from '@angular/core';
import {EmployeeAddOrEditComponent} from "../employee-add-or-edit.component";

@Component({
  selector: 'app-employee-add',
  templateUrl: '../employee-add-or-edit.component.html',
  styleUrls: ['../employee-add-or-edit.component.scss']
})
export class EmployeeAddComponent extends EmployeeAddOrEditComponent {

  constructor(newInjector: Injector) {
    super(newInjector);
    this.actionType = "hinzufügen";
    this.doneActionType = "hinzugefügt";
  }
}
