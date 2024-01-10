import {QualificationModel} from "./qualificationModel";

export interface EmployeeModel {
  id?: number,
  lastName?: string,
  firstName?: string,
  street?: string,
  postcode?: string,
  city?: string,
  phone?: string
  skillSet?: QualificationModel[]
}
