import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module'
import { VendedorRoutingModule } from './vendedor-routing.module'

import { VendedorComponent } from './vendedor.component'
import { CompraComponent } from './pages/compra/compra.component'
import { HomeVendedorComponent } from './pages/home-vendedor/home-vendedor.component'
import { ProductDetaComponent } from './pages/product-deta/product-deta.component'

import { CarritoComponent } from './componentes/carrito/carrito.component'
import { ProductosComponent } from './componentes/productos/productos.component'

@NgModule({
  declarations: [
    VendedorComponent,
    CompraComponent,
    HomeVendedorComponent,
    ProductDetaComponent,
    CarritoComponent,
    ProductosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    VendedorRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class VendedorModule {}
