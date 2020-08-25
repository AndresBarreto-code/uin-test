import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';

import { LoginGuardGuard } from './guards/login-guard.guard';
import { ProductsGuard } from './guards/products.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuardGuard] },
  { path: 'Productos', component: ProductosComponent, canActivate: [ProductsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
