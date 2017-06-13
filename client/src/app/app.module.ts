import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { CompraComponent } from './components/compra/compra.component';
import { VendaComponent } from './components/venda/venda.component';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, TasksComponent,ClienteComponent,
    LoginComponent,
    FornecedorComponent,
    CompraComponent,
    VendaComponent,
    ProdutoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
