import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { CompraComponent } from '../compra/compra.component';
import { FornecedorComponent } from '../fornecedor/fornecedor.component';
import { ProdutoComponent } from '../produto/produto.component';
import { VendaComponent } from '../venda/venda.component';
import { LoginComponent } from '../login/login.component';


const routes:Routes = [
     { path: 'login',component: LoginComponent},
     { path: 'cliente',component: ClienteComponent},
     { path: 'fornecedor',component: FornecedorComponent},
     { path:'venda',component:VendaComponent},
     { path:'compra',component:CompraComponent},
     { path: '',redirectTo: '/login',pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
