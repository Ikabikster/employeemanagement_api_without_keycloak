import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmployeeAddComponent } from './employee-add-or-edit/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-add-or-edit/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
