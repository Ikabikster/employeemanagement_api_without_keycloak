import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeModel} from "../models/employee.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  fetchAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  fetchSingleEmplyeeWithId(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`/backend/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  addNewEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>('/backend',
      employee,{
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      })
  }
}
