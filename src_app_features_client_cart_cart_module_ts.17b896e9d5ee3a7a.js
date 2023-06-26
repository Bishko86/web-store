"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_client_cart_cart_module_ts"],{

/***/ 592:
/*!********************************************************!*\
  !*** ./src/app/core/store/selectors/user.selectors.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectUserCart": () => (/* binding */ selectUserCart)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectFeature = (state) => state.user;
const selectUserCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.cart);


/***/ }),

/***/ 8594:
/*!********************************************************!*\
  !*** ./src/app/features/client/cart/cart.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/selectors/user.selectors */ 592);
/* harmony import */ var src_app_core_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/store/actions/user.actions */ 3606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartComponent_div_3_Template_span_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const product_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.removeFromCart(product_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, product_r1.price));
} }
class CartComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_0__.DestroyableDirective {
    constructor(store, cdr) {
        super();
        this.store = store;
        this.cdr = cdr;
        this.cartProducts = [];
    }
    ngOnInit() {
        this.store.dispatch((0,src_app_core_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__.getUserCart)());
        this.userCart$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe((data) => {
            if (Array.isArray(data?.products)) {
                this.cartProducts = data.products;
            }
            this.cdr.markForCheck();
        });
    }
    removeFromCart(productId) {
        this.store.dispatch((0,src_app_core_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__.removeProductFromCart)({ productId }));
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [[1, "cart"], ["class", "cart__product", 4, "ngFor", "ngForOf"], [1, "cart__product"], [1, "delete-item", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "USER CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CartComponent_div_3_Template, 10, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cartProducts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], styles: [".cart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.cart__product[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 12px;\n}\n.delete-item[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNKO0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUYiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMTBweDtcblxuICAmX19wcm9kdWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbHVtbi1nYXA6IDEycHg7XG4gIH1cbn1cblxuLmRlbGV0ZS1pdGVtIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_1__.State)(src_app_core_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_2__.selectUserCart)
], CartComponent.prototype, "userCart$", void 0);


/***/ }),

/***/ 6163:
/*!*****************************************************!*\
  !*** ./src/app/features/client/cart/cart.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModule": () => (/* binding */ CartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component */ 8594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent }])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_client_cart_cart_module_ts.17b896e9d5ee3a7a.js.map