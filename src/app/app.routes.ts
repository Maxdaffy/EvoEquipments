
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './components/pages/employees/employees-list/employees-list.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { PagesComponent } from './components/pages/pages.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'employeelist', component: EmployeesListComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
