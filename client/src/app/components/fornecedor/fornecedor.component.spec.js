"use strict";
var testing_1 = require('@angular/core/testing');
var fornecedor_component_1 = require('./fornecedor.component');
describe('FornecedorComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [fornecedor_component_1.FornecedorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(fornecedor_component_1.FornecedorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fornecedor.component.spec.js.map