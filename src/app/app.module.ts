import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTES
import { APP_ROUTES } from './app.routes';

// MODULES
import { PagesModule } from './components/pages/pages.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
