import { NgModule } from '@angular/core';

// ROUTES
import { PAGES_ROUTES } from './pages.routes';

// MODULES
import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    EmployeesListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    EmployeesListComponent,
  ]
})
export class PagesModule { }
