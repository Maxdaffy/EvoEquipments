import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingsComponent } from './components/shared/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { LoginComponent } from './components/login/login.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { EmployeesListComponent } from './components/pages/employees/employees-list/employees-list.component';
import { PagesComponent } from './components/pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SettingsComponent,
    DashboardComponent,
    ProgressComponent,
    LoginComponent,
    BreadcrumbsComponent,
    PagenotfoundComponent,
    EmployeesListComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
