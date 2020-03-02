import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ROUTES
import { PAGES_ROUTES } from './pages.routes';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { PagesComponent } from './pages.component';
import { EmployeeComponent } from './employees/employee/employee.component';

// Services
import { EmployeeService } from '../services/employee.service';
import { MaterialModule } from 'src/app/material/material.module';





@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    EmployeeComponent,
    EmployeesListComponent,
  ],
  providers: [EmployeeService],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    EmployeesListComponent,
  ]
})
export class PagesModule { }

