import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeResponseModel} from "../models/employeeResponse.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EmployeeRequestModel} from "../models/employeeRequest.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  fetchAllEmployees(): Observable<EmployeeResponseModel[]> {
    return this.http.get<EmployeeResponseModel[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  fetchSingleEmplyeeWithId(id: number): Observable<EmployeeResponseModel> {
    return this.http.get<EmployeeResponseModel>(`/backend/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  addNewEmployee(employee: EmployeeRequestModel): Observable<EmployeeResponseModel> {
    return this.http.post<EmployeeResponseModel>('/backend',
      employee, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      })
  }

  updateEmployee(employee: EmployeeRequestModel): Observable<EmployeeResponseModel> {
    return this.http.put<EmployeeResponseModel>(`/backend/${employee.id}`,
      employee, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }
}
