"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var tasks_component_1 = require('./components/tasks/tasks.component');
var app_routing_module_1 = require('./components/app-routing/app-routing.module');
var cliente_component_1 = require('./components/cliente/cliente.component');
var login_component_1 = require('./components/login/login.component');
var fornecedor_component_1 = require('./components/fornecedor/fornecedor.component');
var compra_component_1 = require('./components/compra/compra.component');
var venda_component_1 = require('./components/venda/venda.component');
var produto_component_1 = require('./components/produto/produto.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, tasks_component_1.TasksComponent, cliente_component_1.ClienteComponent,
                login_component_1.LoginComponent,
                fornecedor_component_1.FornecedorComponent,
                compra_component_1.CompraComponent,
                venda_component_1.VendaComponent,
                produto_component_1.ProdutoComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map