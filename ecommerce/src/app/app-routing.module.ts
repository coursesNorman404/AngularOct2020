import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './core/guard/authentication.guard'

import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './admin/pages/home-admin/home-admin.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: HomeAdminComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'noEntrar', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
