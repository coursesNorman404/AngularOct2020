import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthenticationGuard } from './core/guard/authentication.guard'

import { HomeAdminComponent } from './admin/pages/home-admin/home-admin.component'
import { AdminComponent } from './admin/admin.component';
import { ProductDetaComponent } from './vendedor/pages/product-deta/product-deta.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule ) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule )},
  { path: 'vendedor', loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
