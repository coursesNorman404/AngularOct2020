import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './core/guard/authentication.guard'

import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './admin/pages/home-admin/home-admin.component'
import { AdminComponent } from './admin/admin.component';
import { ProductDetaComponent } from './vendedor/pages/product-deta/product-deta.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { HomeVendedorComponent } from './vendedor/pages/home-vendedor/home-vendedor.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard], children: [
    { path: '', component: HomeAdminComponent, canActivate: [ AuthenticationGuard ]},
    { path: 'product/:id', component: ProductDetaComponent, canActivate: [AuthenticationGuard]}
  ]},
  { path: 'vendedor', component: VendedorComponent, canActivate: [AuthenticationGuard], children: [
    { path: '', component: HomeVendedorComponent, canActivate: [AuthenticationGuard ]},
    { path: 'product/:id', component: ProductDetaComponent, canActivate: [AuthenticationGuard]}
  ]},
  { path: 'noEntrar', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
