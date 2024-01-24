import {QualificationModel} from "./qualificationModel";

export interface EmployeeResponseModel {
  id?: number,
  lastName?: string,
  firstName?: string,
  street?: string,
  postcode?: string,
  city?: string,
  phone?: string,
  skillSet?: QualificationModel[]
}
