import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code404Component } from './code404/code404.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

/**
 * Las rutas son Objetos
 * Los objetos tienen varias caracteristicas pero la principal es un atributo llamado PATH
 * path: Es un string donde ponemos la ruta 
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
