import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from 'src/app/core/guard/authentication.guard'

import { CompraComponent } from './pages/compra/compra.component'
import { HomeVendedorComponent } from './pages/home-vendedor/home-vendedor.component'
import { ProductDetaComponent } from './pages/product-deta/product-deta.component'
import { VendedorComponent } from './vendedor.component';

const routes: Routes = [
  { path: '', component: VendedorComponent, canActivate: [AuthenticationGuard ] , children: [
    { path: '', component: HomeVendedorComponent, canActivate: [AuthenticationGuard] },
    { path: 'product/:id', component: ProductDetaComponent, canActivate: [AuthenticationGuard] },
    { path: 'compra', component: CompraComponent, canActivate: [AuthenticationGuard] }
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }