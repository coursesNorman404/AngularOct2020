import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'
import { HomeAdminComponent } from './admin/pages/home-admin/home-admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductosComponent } from './vendedor/componentes/productos/productos.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { HomeVendedorComponent } from './vendedor/pages/home-vendedor/home-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeAdminComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    VendedorComponent,
    HomeVendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
