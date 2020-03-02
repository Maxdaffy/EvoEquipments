
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employees/employee/employee.component';


const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'employees', component: EmployeeComponent },
      // { path: 'employeeslist', component: EmployeesListComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
