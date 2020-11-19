import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SharedModule } from 'src/app/shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module'

import { AdminComponent } from './admin.component'
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class AdminModule { }
