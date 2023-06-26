"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_client_client_module_ts"],{

/***/ 8747:
/*!*************************************************!*\
  !*** ./src/app/core/enums/order-status.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatus": () => (/* binding */ OrderStatus)
/* harmony export */ });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["NEW"] = 0] = "NEW";
    OrderStatus[OrderStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    OrderStatus[OrderStatus["DONE"] = 2] = "DONE";
    OrderStatus[OrderStatus["CANCELED"] = 3] = "CANCELED";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ 7908:
/*!**********************************************************!*\
  !*** ./src/app/features/client/client-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component */ 9301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_0__.ClientComponent,
        children: [
            { path: 'cart', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_client_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 6163)).then((mod) => mod.CartModule) },
            { path: 'orders', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_client_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.module */ 4668)).then((mod) => mod.OrdersModule) },
        ],
    },
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9301:
/*!*****************************************************!*\
  !*** ./src/app/features/client/client.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ClientComponent {
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 3, vars: 0, template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 8814:
/*!**************************************************!*\
  !*** ./src/app/features/client/client.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientModule": () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component */ 9301);
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-routing.module */ 7908);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/order.service */ 4400);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cart.service */ 6847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ClientModule {
}
ClientModule.ɵfac = function ClientModule_Factory(t) { return new (t || ClientModule)(); };
ClientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ClientModule });
ClientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService, _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _client_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClientModule, { declarations: [_client_component__WEBPACK_IMPORTED_MODULE_0__.ClientComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _client_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule] }); })();


/***/ }),

/***/ 4400:
/*!***********************************************************!*\
  !*** ./src/app/features/client/services/order.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var src_app_core_enums_order_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums/order-status.enum */ 8747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class OrderService {
    constructor(http) {
        this.http = http;
    }
    createOrder(orderList) {
        return this.http.post('./orders', { orderList });
    }
    cancelOrder(orderId) {
        return this.http.put('./orders', { orderId, status: src_app_core_enums_order_status_enum__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.CANCELED });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_features_client_client_module_ts.35a8ba2d2a8696bf.js.map