import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
