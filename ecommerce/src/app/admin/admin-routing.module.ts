import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../core/guard/authentication.guard';
import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [ AuthenticationGuard ], children: [
    { path: '', component: HomeAdminComponent, canActivate: [ AuthenticationGuard ]}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
