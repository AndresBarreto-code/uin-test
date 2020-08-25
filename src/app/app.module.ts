import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';

import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { TituloComponent } from './titulo/titulo.component';
import { Kind1Component } from './kind1/kind1.component';
import { Kind2Component } from './kind2/kind2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    TituloComponent,
    Kind1Component,
    Kind2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
