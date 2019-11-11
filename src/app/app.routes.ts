
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
