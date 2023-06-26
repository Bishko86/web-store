"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_admin_admin_module_ts"],{

/***/ 1996:
/*!********************************************************!*\
  !*** ./src/app/features/admin/admin-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 7623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
        children: [
            {
                path: '', redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 5550)).then((mod) => mod.UsersModule),
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_order_orders-admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order/orders-admin.module */ 9537)).then((mod) => mod.OrdersAdminModule),
            },
            {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_product_product-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product-admin.module */ 1620)).then((mod) => mod.ProductAdminModule),
            },
            {
                path: 'categories', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_category_category-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./category/category-admin.module */ 4018)).then((mod) => mod.CategoryAdminModule),
            },
            { path: '**', redirectTo: '/admin/users' },
        ],
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7623:
/*!***************************************************!*\
  !*** ./src/app/features/admin/admin.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/store/actions/category.actions */ 9053);
/* harmony import */ var src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/store/actions/product.action */ 2296);
/* harmony import */ var src_app_core_store_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/actions/admin.actions */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 5892);








function AdminComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, tab_r1));
} }
class AdminComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.tabs = ['users', 'orders', 'categories', 'products'];
    }
    ngOnInit() {
        this.store.dispatch((0,src_app_core_store_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__.getUsers)());
        this.store.dispatch((0,src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategories)());
        this.store.dispatch((0,src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.getProducts)());
        this.setCurrentTabIndex();
    }
    setCurrentTabIndex() {
        const route = this.router.url.split('/').pop() || 'users';
        this.currentTabIndex = this.tabs.indexOf(route, 0);
    }
    redirectTo(tab) {
        const url = [this.tabs[tab.index]];
        this.router.navigate(url, { relativeTo: this.route });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 4, vars: 2, consts: [[1, "admin-page"], ["animationDuration", "0ms", "mat-align-tabs", "start", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], [4, "ngFor", "ngForOf"], [3, "label"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedTabChange", function AdminComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) { return ctx.redirectTo($event); })("selectedIndexChange", function AdminComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.currentTabIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedIndex", ctx.currentTabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: [".admin-page[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.admin-page[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.admin-page[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background-color: #eeff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0FBREo7QUFHSTtFQUNFLHlCQ1RNO0FEUVoiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi5hZG1pbi1wYWdlIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gIG1hdC10YWItZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgICBoMyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmcteWVsbG93O1xuICAgIH1cbiAgfVxufVxuIiwiJGJnLXllbGxvdzogI2VlZmYwMDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHNub3c6ICNmZmZhZmE7XG4kbWludGNyZWFtOiAjZjVmZmZhO1xuXG4kZ3JheTogIzgwODA4MDtcbiRzbGF0ZWdyZXk6ICM3MDgwOTA7XG4kbGlnaHRzbGF0ZWdyYXk6ICM3Nzg4OTk7XG4kbGlnaHRncmV5OiAjZDNkM2QzO1xuJHNpbHZlcjogI2MwYzBjMDtcblxuJHByaW1hcnktYWN0aXZlLWJsdWU6ICMyMzY4ZWU7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0xMDogIzNlN2ZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTE1OiAjNTE4Y2ZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMjA6ICM2NDk5ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0zMDogIzc4YTZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTQwOiAjOGJiMmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNTA6ICM5ZWJmZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS02MDogI2IyY2NmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTcwOiAjYzVkOWZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtODA6ICNkOGU1ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS05MDogI2VjZjJmZjtcblxuJHN0ZWVsYmx1ZTogIzQ2ODJiNDtcbiRtaWRuaWdodGJsdWU6ICMxOTE5NzA7XG4kZHVzay1ibHVlOiAjMjI1NTgyO1xuJGR1c2stYmx1ZS1ob3ZlcjogIzM5NjY4ZTtcbiRsaWdodHN0ZWVsYmx1ZTogI2IwYzRkZTtcbiRhbGljZWJsdWU6ICNmMGY4ZmY7XG5cbiRzdXBwb3J0aXZlLWdyZWVuLTEwOiAjNWFhNjU4O1xuJHN1cHBvcnRpdmUtZ3JlZW4tMTU6ICM3MGIxNmU7XG4kc3VwcG9ydGl2ZS1ncmVlbi00MDogI2QxZWFjZTtcbiRzdXBwb3J0aXZlLWdyZWVuLTUwOiAjZjJmYWYyO1xuXG4kdG9tYXRvOiAjZmY2MzQ3O1xuJG9yYW5nZXJlZDogI2ZmNDUwMDtcblxuJHJlZDogI2RiMjAyZjtcblxuJHNlY29uZGFyeS1kYXJrLWJsdWUtMTA6ICMwYTE2M2U7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0xNTogIzRjNTY3MztcbiRzZWNvbmRhcnktZGFyay1ibHVlLTIwOiAjNjc3MDg5O1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtMzA6ICM5MTk4YWM7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS00MDogI2QxZDZlMjtcbiRzZWNvbmRhcnktZGFyay1ibHVlLTQ1OiAjZWFlY2YyO1xuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6394:
/*!************************************************!*\
  !*** ./src/app/features/admin/admin.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 1996);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/category.service */ 4483);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ 2266);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ 7623);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/order.service */ 8266);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService, _services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService, _services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService,], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ }),

/***/ 8266:
/*!**********************************************************!*\
  !*** ./src/app/features/admin/services/order.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        return this.http.get('/orders');
    }
    changeOrderStatus(orderId, status) {
        return this.http.put('/orders', { orderId, status });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_features_admin_admin_module_ts.7bc71c480337ae1c.js.map