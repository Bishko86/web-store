"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_decorators_ngrx-selector_decorator_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_static_layout_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./static/layout/layout.module */ 5681)).then((mod) => mod.LayoutModule),
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_decorators_ngrx-selector_decorator_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_static_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./static/auth/auth.module */ 20)).then((mod) => mod.AuthModule),
    },
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_injector_injector_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/injector/injector.module */ 8279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
    constructor(moduleInjector) {
        this.moduleInjector = moduleInjector;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_injector_injector_module__WEBPACK_IMPORTED_MODULE_0__.ExtraModuleInjector)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/app.interceptor */ 7034);
/* harmony import */ var _store_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/ngrx.module */ 1926);
/* harmony import */ var _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase/firebase.module */ 4106);
/* harmony import */ var _features_admin_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/admin/services/category.service */ 4483);
/* harmony import */ var _features_admin_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/admin/services/product.service */ 2266);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/destroyable.directive */ 4004);
/* harmony import */ var _features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/client/services/cart.service */ 6847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);












class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_0__.AppInterceptor, multi: true },
        _features_admin_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService,
        _features_admin_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService,
        _features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _store_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.NgRxModule,
        _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_2__.FirebaseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_5__.DestroyableDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _store_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.NgRxModule,
        _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_2__.FirebaseModule] }); })();


/***/ }),

/***/ 4004:
/*!**********************************************************!*\
  !*** ./src/app/core/directives/destroyable.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestroyableDirective": () => (/* binding */ DestroyableDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class DestroyableDirective {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
DestroyableDirective.ɵfac = function DestroyableDirective_Factory(t) { return new (t || DestroyableDirective)(); };
DestroyableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DestroyableDirective, selectors: [["", "appDestroyable", ""]] });


/***/ }),

/***/ 4106:
/*!**************************************************!*\
  !*** ./src/app/core/firebase/firebase.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseModule": () => (/* binding */ FirebaseModule)
/* harmony export */ });
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






const firebaseConfig = {
    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_API_KEY,
    authDomain: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_AUTH_DOMAIN,
    projectId: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_PROTECTED_ID,
    storageBucket: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_MESSAGING_SENDER_ID,
    appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FIREBASE_APP_ID,
};
class FirebaseModule {
}
FirebaseModule.ɵfac = function FirebaseModule_Factory(t) { return new (t || FirebaseModule)(); };
FirebaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FirebaseModule });
FirebaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.AngularFireModule.initializeApp(firebaseConfig),
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FirebaseModule, { imports: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule] }); })();


/***/ }),

/***/ 8279:
/*!**************************************************!*\
  !*** ./src/app/core/injector/injector.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtraModuleInjector": () => (/* binding */ ExtraModuleInjector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ExtraModuleInjector {
    constructor(injector) {
        this.injector = injector;
        ExtraModuleInjector.injector = injector;
    }
    static get(token) {
        if (ExtraModuleInjector.injector) {
            return ExtraModuleInjector.injector.get(token);
        }
    }
}
ExtraModuleInjector.ɵfac = function ExtraModuleInjector_Factory(t) { return new (t || ExtraModuleInjector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector)); };
ExtraModuleInjector.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExtraModuleInjector, factory: ExtraModuleInjector.ɵfac });


/***/ }),

/***/ 7034:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/app.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInterceptor": () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class AppInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request);
    }
}
AppInterceptor.ɵfac = function AppInterceptor_Factory(t) { return new (t || AppInterceptor)(); };
AppInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInterceptor, factory: AppInterceptor.ɵfac });


/***/ }),

/***/ 382:
/*!*******************************************!*\
  !*** ./src/app/core/models/cart.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8375:
/*!***********************************************!*\
  !*** ./src/app/core/models/category.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2935:
/*!*******************************************!*\
  !*** ./src/app/core/models/chat.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3902:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* reexport safe */ _user_model__WEBPACK_IMPORTED_MODULE_5__.User)
/* harmony export */ });
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.model */ 382);
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.model */ 8375);
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.model */ 2935);
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.model */ 6426);
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.model */ 670);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ 9249);








/***/ }),

/***/ 6426:
/*!********************************************!*\
  !*** ./src/app/core/models/order.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 670:
/*!**********************************************!*\
  !*** ./src/app/core/models/product.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9249:
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(dto, role) {
        this.id = dto?.uid || '';
        this.name = dto?.displayName || '';
        this.email = dto?.email || '';
        this.role = role;
        this.createdAt = Date.parse(dto?.metadata.creationTime || '');
    }
}


/***/ }),

/***/ 263:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 3902);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth.actions */ 6977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);








class AuthService {
  constructor(afAuth, firestore, store) {
    this.afAuth = afAuth;
    this.firestore = firestore;
    this.store = store;
    this.subscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.afAuth.authState.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throttleTime)(50)).subscribe(user => {
      if (user) {
        this.saveUser(user);
      } else {
        this.subscription$.unsubscribe();
        localStorage.removeItem('user');
      }
    });
  }

  saveUser(userModel) {
    this.subscription$ = this.firestore.collection('/users').doc(userModel.uid).valueChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(user => user?.role !== undefined)).subscribe(data => {
      const user = new _models__WEBPACK_IMPORTED_MODULE_1__.User(userModel, data.role);
      this.store.dispatch((0,_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.updateUser)({
        user
      }));
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  login({
    email,
    password
  }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  registrate({
    email,
    password,
    username
  }) {
    var _this = this;

    return (0,_home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.afAuth.createUserWithEmailAndPassword(email, password).then(d => d.user?.updateProfile({
        displayName: username
      }));
      const user = yield _this.afAuth.currentUser;
      return user;
    })();
  }

  logout() {
    return this.afAuth.signOut();
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 446:
/*!***************************************************!*\
  !*** ./src/app/core/services/snackbar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarService": () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);


class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(text, action, duration = 2500) {
        this.snackBar.open(text, action, {
            duration: duration,
            verticalPosition: 'top',
            panelClass: ['color-snackbar'],
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackBarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 104:
/*!******************************************************!*\
  !*** ./src/app/core/services/upload-file.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFileService": () => (/* binding */ UploadFileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);



class UploadFileService {
    constructor(storage) {
        this.storage = storage;
        this.basePath = '/uploads';
        this.uploadedFiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    pushFileToStorage(file) {
        const filePath = `${this.basePath}/${file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, file);
        uploadTask
            .snapshotChanges()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            storageRef.getDownloadURL().subscribe((downloadUrl) => {
                const fileUploaded = { url: downloadUrl, name: file.name, size: file.size };
                this.uploadedFiles$.next(fileUploaded);
            });
        }))
            .subscribe();
        return uploadTask;
    }
    deleteFile(fileName) {
        const storageRef = this.storage.ref(this.basePath);
        return storageRef.child(fileName).delete();
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__.AngularFireStorage)); };
UploadFileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.service */ 446);




class UserService {
  constructor(firestore, snackBar) {
    this.firestore = firestore;
    this.snackBar = snackBar;
    this.usersRef = this.firestore.collection('/users');
    this.cartRef = this.firestore.collection('/cart');
  }

  getAllUsers() {
    return this.usersRef;
  }

  createUser(user) {
    var _this = this;

    return (0,_home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.cartRef.doc(user.id).set({
          products: []
        });
        yield _this.usersRef.doc(user.id).set({ ...user,
          role: 1
        });
      } catch (err) {
        _this.snackBar.openSnackBar('Something went wrong', 'Error');
      }
    })();
  }

  updateUser(id, data) {
    return this.usersRef.doc(id).update(data);
  }

  deleteUser(id) {
    return this.usersRef.doc(id).delete();
  }

}

UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackBarService));
};

UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8389:
/*!*****************************************************!*\
  !*** ./src/app/core/store/actions/admin.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminActions": () => (/* binding */ AdminActions),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUsersFailure": () => (/* binding */ getUsersFailure),
/* harmony export */   "getUsersSuccess": () => (/* binding */ getUsersSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var AdminActions;
(function (AdminActions) {
    AdminActions["GET_ADMIN"] = "[Admin] Get Users";
    AdminActions["GET_ADMIN_SUCCESS"] = "[Admin] Get Users Success";
    AdminActions["GET_ADMIN_FAILURE"] = "[Admin] Get Users Failure";
})(AdminActions || (AdminActions = {}));
const getUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AdminActions.GET_ADMIN);
const getUsersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AdminActions.GET_ADMIN_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUsersFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AdminActions.GET_ADMIN_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 6977:
/*!****************************************************!*\
  !*** ./src/app/core/store/actions/auth.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthActions": () => (/* binding */ AuthActions),
/* harmony export */   "authIsLoading": () => (/* binding */ authIsLoading),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "loginFailure": () => (/* binding */ loginFailure),
/* harmony export */   "loginSuccess": () => (/* binding */ loginSuccess),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "logoutFailure": () => (/* binding */ logoutFailure),
/* harmony export */   "logoutSuccess": () => (/* binding */ logoutSuccess),
/* harmony export */   "registrate": () => (/* binding */ registrate),
/* harmony export */   "registrateFailure": () => (/* binding */ registrateFailure),
/* harmony export */   "registrateSuccess": () => (/* binding */ registrateSuccess),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var AuthActions;
(function (AuthActions) {
    AuthActions["LOGOUT"] = "[Auth] Logout";
    AuthActions["LOGOUT_SUCCESS"] = "[Auth] Logout Success";
    AuthActions["LOGOUT_FAILURE"] = "[Auth] Logout Failure";
    AuthActions["LOGIN"] = "[Auth] Login";
    AuthActions["LOGIN_SUCCESS"] = "[Auth] Login Success";
    AuthActions["LOGIN_FAILURE"] = "[Auth] Login Failure";
    AuthActions["REGISTRATION"] = "[Auth] Registration";
    AuthActions["REGISTRATION_SUCCESS"] = "[Auth] Registration Success";
    AuthActions["REGISTRATION_FAILURE"] = "[Auth] Registration Failure";
    AuthActions["UPDATE_USER_DATA"] = "[Auth] Update User Data";
    AuthActions["AUTH_IS_LOADING"] = "[Auth] Auth Is Loading";
})(AuthActions || (AuthActions = {}));
//login
const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGIN, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGIN_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGIN_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//registrate
const registrate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.REGISTRATION, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registrateSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.REGISTRATION_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registrateFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.REGISTRATION_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//logout
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGOUT);
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGOUT_SUCCESS);
const logoutFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGOUT_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//update
const updateUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.UPDATE_USER_DATA, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//is loading
const authIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.AUTH_IS_LOADING, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 9053:
/*!********************************************************!*\
  !*** ./src/app/core/store/actions/category.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryActions": () => (/* binding */ CategoryActions),
/* harmony export */   "addCategory": () => (/* binding */ addCategory),
/* harmony export */   "addCategoryFailure": () => (/* binding */ addCategoryFailure),
/* harmony export */   "addCategorySuccess": () => (/* binding */ addCategorySuccess),
/* harmony export */   "categoryIsLoading": () => (/* binding */ categoryIsLoading),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "getCategoriesFailure": () => (/* binding */ getCategoriesFailure),
/* harmony export */   "getCategoriesSuccess": () => (/* binding */ getCategoriesSuccess),
/* harmony export */   "removeCategory": () => (/* binding */ removeCategory),
/* harmony export */   "removeCategoryFailure": () => (/* binding */ removeCategoryFailure),
/* harmony export */   "removeCategorySuccess": () => (/* binding */ removeCategorySuccess),
/* harmony export */   "updateCategory": () => (/* binding */ updateCategory),
/* harmony export */   "updateCategoryFailure": () => (/* binding */ updateCategoryFailure),
/* harmony export */   "updateCategorySuccess": () => (/* binding */ updateCategorySuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var CategoryActions;
(function (CategoryActions) {
    CategoryActions["GET_CATEGORIES"] = "[Category] Get Categories";
    CategoryActions["GET_CATEGORIES_SUCCESS"] = "[Category] Get Categories Success";
    CategoryActions["GET_CATEGORIES_FAILURE"] = "[Category] Get Categories Failure";
    CategoryActions["ADD_CATEGORY"] = "[Category] Add Category";
    CategoryActions["ADD_CATEGORY_SUCCESS"] = "[Category] Add Category Success";
    CategoryActions["ADD_CATEGORY_FAILURE"] = "[Category] Add Category Failure";
    CategoryActions["UPDATE_CATEGORY"] = "[Category] Update Category";
    CategoryActions["UPDATE_CATEGORY_SUCCESS"] = "[Category] Update Category Success";
    CategoryActions["UPDATE_CATEGORY_FAILURE"] = "[Category] Update Category Failure";
    CategoryActions["REMOVE_CATEGORY"] = "[Category] Remove Category";
    CategoryActions["REMOVE_CATEGORY_SUCCESS"] = "[Category] Remove Category Success";
    CategoryActions["REMOVE_CATEGORY_FAILURE"] = "[Category] Remove Category Failure";
    CategoryActions["CATEGORY_IS_LOADING"] = "[Category] Category Is Loading";
})(CategoryActions || (CategoryActions = {}));
//get categories
const getCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.GET_CATEGORIES);
const getCategoriesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.GET_CATEGORIES_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getCategoriesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.GET_CATEGORIES_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//add category
const addCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.ADD_CATEGORY, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCategorySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.ADD_CATEGORY_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCategoryFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.ADD_CATEGORY_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//update category
const updateCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.UPDATE_CATEGORY, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCategorySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.UPDATE_CATEGORY_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCategoryFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.UPDATE_CATEGORY_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//remove category
const removeCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.REMOVE_CATEGORY, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeCategorySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.REMOVE_CATEGORY_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeCategoryFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.REMOVE_CATEGORY_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//loading category
const categoryIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CategoryActions.CATEGORY_IS_LOADING, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 9678:
/*!******************************************************!*\
  !*** ./src/app/core/store/actions/common.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonActions": () => (/* binding */ CommonActions),
/* harmony export */   "isFetching": () => (/* binding */ isFetching)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var CommonActions;
(function (CommonActions) {
    CommonActions["IS_FETCHING"] = "[Common] Is Fetching";
})(CommonActions || (CommonActions = {}));
const isFetching = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CommonActions.IS_FETCHING, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 2296:
/*!******************************************************!*\
  !*** ./src/app/core/store/actions/product.action.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductActions": () => (/* binding */ ProductActions),
/* harmony export */   "addProduct": () => (/* binding */ addProduct),
/* harmony export */   "addProductFailure": () => (/* binding */ addProductFailure),
/* harmony export */   "addProductSuccess": () => (/* binding */ addProductSuccess),
/* harmony export */   "getProducts": () => (/* binding */ getProducts),
/* harmony export */   "getProductsByCategory": () => (/* binding */ getProductsByCategory),
/* harmony export */   "getProductsByCategorySuccess": () => (/* binding */ getProductsByCategorySuccess),
/* harmony export */   "getProductsFailure": () => (/* binding */ getProductsFailure),
/* harmony export */   "getProductsSuccess": () => (/* binding */ getProductsSuccess),
/* harmony export */   "productIsLoading": () => (/* binding */ productIsLoading),
/* harmony export */   "removeProduct": () => (/* binding */ removeProduct),
/* harmony export */   "removeProductFailure": () => (/* binding */ removeProductFailure),
/* harmony export */   "removeProductSuccess": () => (/* binding */ removeProductSuccess),
/* harmony export */   "updateProduct": () => (/* binding */ updateProduct),
/* harmony export */   "updateProductFailure": () => (/* binding */ updateProductFailure),
/* harmony export */   "updateProductSuccess": () => (/* binding */ updateProductSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var ProductActions;
(function (ProductActions) {
    ProductActions["GET_PRODUCTS"] = "[Product] Get Product";
    ProductActions["GET_PRODUCTS_SUCCESS"] = "[Product] Get Product Success";
    ProductActions["GET_PRODUCTS_FAILURE"] = "[Product] Get Product Failure";
    ProductActions["GET_PRODUCTS_BY_CATEGORY"] = "[Product] Get Products By Category";
    ProductActions["GET_PRODUCTS_BY_CATEGORY_SUCCESS"] = "[Product] Get Products By CategorySuccess";
    ProductActions["ADD_PRODUCT"] = "[Product] Add Product";
    ProductActions["ADD_PRODUCT_SUCCESS"] = "[Product] Add Product Success";
    ProductActions["ADD_PRODUCT_FAILURE"] = "[Product] Add Product Failure";
    ProductActions["UPDATE_PRODUCT"] = "[Product] Update Product";
    ProductActions["UPDATE_PRODUCT_SUCCESS"] = "[Product] Update Product Success";
    ProductActions["UPDATE_PRODUCT_FAILURE"] = "[Product] Update Product Failure";
    ProductActions["REMOVE_PRODUCT"] = "[Product] Remove Product";
    ProductActions["REMOVE_PRODUCT_SUCCESS"] = "[Product] Remove Product Success";
    ProductActions["REMOVE_PRODUCT_FAILURE"] = "[Product] Remove Product Failure";
    ProductActions["PRODUCT_IS_LOADING"] = "[Product] Product Is Loading";
})(ProductActions || (ProductActions = {}));
// get products
const getProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.GET_PRODUCTS);
const getProductsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.GET_PRODUCTS_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.GET_PRODUCTS_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductsByCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.GET_PRODUCTS_BY_CATEGORY, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductsByCategorySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.GET_PRODUCTS_BY_CATEGORY_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//add product
const addProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.ADD_PRODUCT, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addProductSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.ADD_PRODUCT_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addProductFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.ADD_PRODUCT_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//update product
const updateProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.UPDATE_PRODUCT, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateProductSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.UPDATE_PRODUCT_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateProductFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.UPDATE_PRODUCT_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//remove product
const removeProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.REMOVE_PRODUCT, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeProductSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.REMOVE_PRODUCT_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeProductFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.REMOVE_PRODUCT_FAILURE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// product is loading
const productIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ProductActions.PRODUCT_IS_LOADING, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 3606:
/*!****************************************************!*\
  !*** ./src/app/core/store/actions/user.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActions": () => (/* binding */ UserActions),
/* harmony export */   "addProductToCart": () => (/* binding */ addProductToCart),
/* harmony export */   "getUserCart": () => (/* binding */ getUserCart),
/* harmony export */   "getUserCartSuccess": () => (/* binding */ getUserCartSuccess),
/* harmony export */   "removeProductFromCart": () => (/* binding */ removeProductFromCart)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

var UserActions;
(function (UserActions) {
    UserActions["ADD_PRODUCT_TO_CART"] = "[User] Add Product To Cart";
    UserActions["REMOVE_PRODUCT_FROM_CART"] = "[User] Remove Product From Cart";
    UserActions["GET_USER_CART"] = "[User] Get User Cart";
    UserActions["GET_USER_CART_SUCCESS"] = "[User] Get User Cart Success";
})(UserActions || (UserActions = {}));
const addProductToCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActions.ADD_PRODUCT_TO_CART, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeProductFromCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActions.REMOVE_PRODUCT_FROM_CART, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUserCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActions.GET_USER_CART);
const getUserCartSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActions.GET_USER_CART_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 6314:
/*!*****************************************************!*\
  !*** ./src/app/core/store/effects/admin.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminEffects": () => (/* binding */ AdminEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _actions_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/admin.actions */ 8389);
/* harmony import */ var _actions_common_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/common.actions */ 9678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 8386);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);








class AdminEffects {
    constructor(userService, actions$, store) {
        this.userService = userService;
        this.actions$ = actions$;
        this.store = store;
        this.users$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getUsers), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: true }));
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
                return this.userService.getAllUsers().valueChanges()
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                    this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: false }));
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((users) => _actions_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getUsersSuccess({ users })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                    this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: false }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getUsersFailure({ error }));
                }));
            }));
        });
    }
}
AdminEffects.ɵfac = function AdminEffects_Factory(t) { return new (t || AdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store)); };
AdminEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AdminEffects, factory: AdminEffects.ɵfac });


/***/ }),

/***/ 5462:
/*!****************************************************!*\
  !*** ./src/app/core/store/effects/auth.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3902);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ 6977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 263);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);









class AuthEffects {
    constructor(authService, actions$, store, router) {
        this.authService = authService;
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.login), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ email, password }) => {
                this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: true }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authService.login({ email, password })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                    const userDto = data?.user;
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    this.router.navigateByUrl('/');
                    return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginSuccess({
                        user: new _models__WEBPACK_IMPORTED_MODULE_0__.User(userDto)
                    });
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginFailure({ error }));
                }));
            }));
        });
        this.registrate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.registrate), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)((action) => {
                const { username, email, password } = action;
                this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: true }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authService.registrate({ username, email, password })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    this.router.navigateByUrl('/');
                    return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.registrateSuccess({ user: new _models__WEBPACK_IMPORTED_MODULE_0__.User(user) });
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.registrateFailure({ error }));
                }));
            }));
        });
        this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
                this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: true }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authService.logout()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    this.router.navigateByUrl('/');
                    return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logoutSuccess();
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading({ isLoading: false }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logoutFailure({ error }));
                }));
            }));
        });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ 8664:
/*!********************************************************!*\
  !*** ./src/app/core/store/effects/category.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryEffects": () => (/* binding */ CategoryEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/category.actions */ 9053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_features_admin_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/admin/services/category.service */ 4483);







class CategoryEffects {
    constructor(store, actions$, categoryService) {
        this.store = store;
        this.actions$ = actions$;
        this.categoryService = categoryService;
        this.getCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategories), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.categoryService.getCategories().snapshotChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((changes) => changes.map((c) => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((categories) => (0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategoriesSuccess)({ categories })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategoriesFailure)({ error }));
            }))));
        });
        this.addCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.addCategory), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ name }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.categoryService.addCategory(name)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)((data) => typeof data !== 'undefined'), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((category) => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.addCategorySuccess)({ category });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.addCategoryFailure)({ error }));
            }))));
        });
        this.removeCategory$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.removeCategory), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ categoryId }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.categoryService.removeCategory(categoryId)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.removeCategorySuccess)({ categoryId });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.removeCategoryFailure)({ error }));
            }))));
        });
        this.updateCategory$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.updateCategory), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ categoryName, categoryId }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.categoryService.updateCategory(categoryName, categoryId)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.updateCategorySuccess)({ categoryName, categoryId });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this.store.dispatch((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading)({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.updateCategoryFailure)({ error }));
            }))));
        });
    }
}
CategoryEffects.ɵfac = function CategoryEffects_Factory(t) { return new (t || CategoryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_features_admin_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService)); };
CategoryEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: CategoryEffects, factory: CategoryEffects.ɵfac });


/***/ }),

/***/ 339:
/*!*******************************************************!*\
  !*** ./src/app/core/store/effects/product.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEffects": () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _actions_product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/product.action */ 2296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_features_admin_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/admin/services/product.service */ 2266);
/* harmony import */ var _services_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload-file.service */ 104);








class ProductEffects {
    constructor(store, actions$, productService, uploadFileService) {
        this.store = store;
        this.actions$ = actions$;
        this.productService = productService;
        this.uploadFileService = uploadFileService;
        this.getProducts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.getProducts), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.productService
                .getProducts()
                .snapshotChanges()
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((changes) => changes.map((c) => ({
                id: c.payload.doc.id,
                ...c.payload.doc.data(),
            }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((products) => _actions_product_action__WEBPACK_IMPORTED_MODULE_0__.getProductsSuccess({ products })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.getProductsFailure({ error }));
            }))));
        });
        this.addProduct$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.addProduct), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ product }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.productService.addProduct(product)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((product) => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                return _actions_product_action__WEBPACK_IMPORTED_MODULE_0__.addProductSuccess({ product });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.addProductFailure({ error }));
            }))));
        });
        this.updateProduct$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.updateProduct), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: true }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ product }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.productService.updateProduct(product)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                return _actions_product_action__WEBPACK_IMPORTED_MODULE_0__.updateProductSuccess({ product });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.updateProductFailure({ error }));
            }))));
        });
        this.removeProduct$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.removeProduct), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: true }));
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ productId, photos }) => {
                photos && photos.forEach((photo) => this.uploadFileService.deleteFile(photo.name));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.productService.removeProduct(productId)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
                    this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                    return _actions_product_action__WEBPACK_IMPORTED_MODULE_0__.removeProductSuccess({ productId });
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                    this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.removeProductFailure({ error }));
                }));
            }));
        });
        this.getProductsByCategory$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.getProductsByCategory), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => { this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: true })); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ id }) => {
                return this.productService.getProductsByCategory(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                    this.store.dispatch(_actions_product_action__WEBPACK_IMPORTED_MODULE_0__.productIsLoading({ isLoading: false }));
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((products) => {
                    return _actions_product_action__WEBPACK_IMPORTED_MODULE_0__.getProductsByCategorySuccess({ products });
                }));
            }));
        });
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_features_admin_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.UploadFileService)); };
ProductEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });


/***/ }),

/***/ 3903:
/*!****************************************************!*\
  !*** ./src/app/core/store/effects/user.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ 3606);
/* harmony import */ var _actions_common_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/common.actions */ 9678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/client/services/cart.service */ 6847);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);









class UserEffects {
    constructor(actions$, cartService, store) {
        this.actions$ = actions$;
        this.cartService = cartService;
        this.store = store;
        this.getCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.getUserCart), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: true }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.cartService.getCart()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                    this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: false }));
                }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((cart) => {
                return this.cartService.getCartProducts(cart.products).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(data => console.error(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((data) => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.getUserCartSuccess)({ cart: { products: data } })));
            }));
        });
        this.addToCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.addProductToCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ productId }) => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.cartService.addToCart(productId))
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.getUserCart)()));
            }));
        });
        this.removeFromCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.removeProductFromCart), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: true }));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ productId }) => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.cartService.removeFromCart(productId))
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                    this.store.dispatch((0,_actions_common_actions__WEBPACK_IMPORTED_MODULE_1__.isFetching)({ isFetching: true }));
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.getUserCart)()));
            }));
        });
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store)); };
UserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ 1926:
/*!*******************************************!*\
  !*** ./src/app/core/store/ngrx.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgRxModule": () => (/* binding */ NgRxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/app.reducer */ 8799);
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/auth.effects */ 5462);
/* harmony import */ var _effects_admin_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/admin.effects */ 6314);
/* harmony import */ var _effects_category_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/category.effects */ 8664);
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/product.effects */ 339);
/* harmony import */ var _injector_injector_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../injector/injector.module */ 8279);
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/user.effects */ 3903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);














class NgRxModule {
}
NgRxModule.ɵfac = function NgRxModule_Factory(t) { return new (t || NgRxModule)(); };
NgRxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NgRxModule });
NgRxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_injector_injector_module__WEBPACK_IMPORTED_MODULE_5__.ExtraModuleInjector], imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forRoot(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_0__.appReducer),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forRoot([_effects_auth_effects__WEBPACK_IMPORTED_MODULE_1__.AuthEffects, _effects_user_effects__WEBPACK_IMPORTED_MODULE_6__.UserEffects, _effects_admin_effects__WEBPACK_IMPORTED_MODULE_2__.AdminEffects, _effects_category_effects__WEBPACK_IMPORTED_MODULE_3__.CategoryEffects, _effects_product_effects__WEBPACK_IMPORTED_MODULE_4__.ProductEffects]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule.instrument()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NgRxModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 7535:
/*!******************************************************!*\
  !*** ./src/app/core/store/reducers/admin.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminReducer": () => (/* binding */ adminReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.state */ 2979);
/* harmony import */ var _actions_admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/admin.actions */ 8389);



const adminReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_app_state__WEBPACK_IMPORTED_MODULE_0__.initialState.admin, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_1__.getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_1__.getUsersFailure, (state, { error }) => ({
    ...state,
    error,
})));


/***/ }),

/***/ 8799:
/*!****************************************************!*\
  !*** ./src/app/core/store/reducers/app.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": () => (/* binding */ appReducer)
/* harmony export */ });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ 3785);
/* harmony import */ var _admin_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.reducer */ 7535);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ 8915);
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.reducer */ 7041);
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.reducer */ 9682);





const appReducer = {
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__.authReducer,
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__.userReducer,
    admin: _admin_reducer__WEBPACK_IMPORTED_MODULE_1__.adminReducer,
    category: _category_reducer__WEBPACK_IMPORTED_MODULE_3__.categoryReducer,
    product: _product_reducer__WEBPACK_IMPORTED_MODULE_4__.productReducer,
};


/***/ }),

/***/ 3785:
/*!*****************************************************!*\
  !*** ./src/app/core/store/reducers/auth.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.state */ 2979);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ 6977);



const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_app_state__WEBPACK_IMPORTED_MODULE_0__.initialState.auth, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.updateUser, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginSuccess, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.registrateSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginFailure, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.registrateFailure, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logoutFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logoutSuccess, (state) => ({
    ...state,
    user: null,
    error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading
})));


/***/ }),

/***/ 7041:
/*!*********************************************************!*\
  !*** ./src/app/core/store/reducers/category.reducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryReducer": () => (/* binding */ categoryReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/category.actions */ 9053);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/app.state */ 2979);



const categoryReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_app_state__WEBPACK_IMPORTED_MODULE_1__.initialState.category, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.removeCategoryFailure, _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategoriesFailure, _actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.updateCategoryFailure, (state, { error }) => ({
    ...state,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.categoryIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.addCategorySuccess, (state, { category }) => ({
    ...state,
    categories: [...state.categories, category],
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.updateCategorySuccess, (state, { categoryName, categoryId }) => ({
    ...state,
    categories: state.categories.map((category) => {
        return category.id === categoryId
            ? {
                ...category,
                name: categoryName,
            }
            : category;
    }),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.removeCategorySuccess, (state, { categoryId }) => ({
    ...state,
    categories: [
        ...state.categories.filter((category) => category.id !== categoryId),
    ],
})));


/***/ }),

/***/ 9682:
/*!********************************************************!*\
  !*** ./src/app/core/store/reducers/product.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productReducer": () => (/* binding */ productReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.state */ 2979);
/* harmony import */ var _actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/product.action */ 2296);



const productReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_app_state__WEBPACK_IMPORTED_MODULE_0__.initialState.product, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.getProductsFailure, _actions_product_action__WEBPACK_IMPORTED_MODULE_1__.addProductFailure, _actions_product_action__WEBPACK_IMPORTED_MODULE_1__.removeProductFailure, _actions_product_action__WEBPACK_IMPORTED_MODULE_1__.updateProductFailure, (state, { error }) => ({
    ...state,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.getProductsSuccess, _actions_product_action__WEBPACK_IMPORTED_MODULE_1__.getProductsByCategorySuccess, (state, { products }) => ({
    ...state,
    products,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.removeProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((prod) => {
        return prod.id === product.id
            ? {
                ...product,
            }
            : prod;
    }),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.productIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
})));


/***/ }),

/***/ 8915:
/*!*****************************************************!*\
  !*** ./src/app/core/store/reducers/user.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userReducer": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.state */ 2979);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ 3606);



const userReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_app_state__WEBPACK_IMPORTED_MODULE_0__.initialState.user, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.getUserCartSuccess, (state, { cart }) => ({
    ...state,
    cart,
})));


/***/ }),

/***/ 9480:
/*!*******************************************************!*\
  !*** ./src/app/core/store/selectors/auth.selector.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAuthIsLoading": () => (/* binding */ selectAuthIsLoading),
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "selectUserId": () => (/* binding */ selectUserId),
/* harmony export */   "selectUserRole": () => (/* binding */ selectUserRole)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectFeature = (state) => state.auth;
const selectUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.user);
const selectUserId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.user?.id);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.error);
const selectAuthIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.isLoading);
const selectUserRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => {
    return state.user?.role;
});


/***/ }),

/***/ 9074:
/*!*************************************************!*\
  !*** ./src/app/core/store/state/admin.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialAdminState": () => (/* binding */ initialAdminState)
/* harmony export */ });
const initialAdminState = {
    users: [],
    error: null,
};


/***/ }),

/***/ 2979:
/*!***********************************************!*\
  !*** ./src/app/core/store/state/app.state.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ 7189);
/* harmony import */ var _category_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.state */ 2191);
/* harmony import */ var _product_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.state */ 5356);
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.state */ 9074);
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.state */ 8935);





const initialState = {
    auth: _auth_state__WEBPACK_IMPORTED_MODULE_0__.initialAuthState,
    user: _user_state__WEBPACK_IMPORTED_MODULE_4__.initialUserState,
    admin: _admin_state__WEBPACK_IMPORTED_MODULE_3__.initialAdminState,
    product: _product_state__WEBPACK_IMPORTED_MODULE_2__.initialProductState,
    category: _category_state__WEBPACK_IMPORTED_MODULE_1__.initialCategoryState,
};


/***/ }),

/***/ 7189:
/*!************************************************!*\
  !*** ./src/app/core/store/state/auth.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialAuthState": () => (/* binding */ initialAuthState)
/* harmony export */ });
const setInitialState = () => {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
};
const initialAuthState = {
    user: setInitialState(),
    error: null,
    isLoading: false,
};


/***/ }),

/***/ 2191:
/*!****************************************************!*\
  !*** ./src/app/core/store/state/category.state.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCategoryState": () => (/* binding */ initialCategoryState)
/* harmony export */ });
const initialCategoryState = {
    categories: [],
    error: null,
    isLoading: false,
};


/***/ }),

/***/ 5356:
/*!***************************************************!*\
  !*** ./src/app/core/store/state/product.state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialProductState": () => (/* binding */ initialProductState)
/* harmony export */ });
const initialProductState = {
    products: [],
    error: null,
    isLoading: false,
};


/***/ }),

/***/ 8935:
/*!************************************************!*\
  !*** ./src/app/core/store/state/user.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialUserState": () => (/* binding */ initialUserState)
/* harmony export */ });
const initialUserState = {
    cart: null,
};


/***/ }),

/***/ 4483:
/*!*************************************************************!*\
  !*** ./src/app/features/admin/services/category.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



class CategoryService {
  constructor(firestore) {
    this.firestore = firestore;
    this.categoryRef = this.firestore.collection('/categories');
  }

  getCategories() {
    return this.categoryRef;
  }

  addCategory(name) {
    var _this = this;

    return (0,_home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.categoryRef.add({
        name: name,
        createdAt: Date.now()
      });
      return new Promise((resolve, reject) => {
        res.onSnapshot(cat => {
          if (cat.exists) {
            resolve({ ...cat.data(),
              id: cat.id
            });
          } else {
            reject('Somethig went wrong');
          }
        });
      });
    })();
  }

  removeCategory(categoryId) {
    return this.categoryRef.doc(categoryId).delete();
  }

  updateCategory(categoryName, categoryId) {
    return this.categoryRef.doc(categoryId).update({
      name: categoryName
    });
  }

}

CategoryService.ɵfac = function CategoryService_Factory(t) {
  return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
};

CategoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CategoryService,
  factory: CategoryService.ɵfac
});

/***/ }),

/***/ 2266:
/*!************************************************************!*\
  !*** ./src/app/features/admin/services/product.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);




class ProductService {
  constructor(firestore) {
    this.firestore = firestore;
    this.productRef = this.firestore.collection('/products');
  }

  getProducts() {
    return this.productRef;
  }

  addProduct(product) {
    var _this = this;

    return (0,_home_runner_work_web_store_web_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.productRef.add({ ...product,
        createdAt: Date.now()
      });
      return new Promise((resolve, reject) => {
        res.onSnapshot(prod => {
          if (prod.exists) {
            resolve({
              id: prod.id,
              ...prod.data()
            });
          } else {
            reject('Somethig went wrong');
          }
        });
      });
    })();
  }

  updateProduct(product) {
    return this.productRef.doc(product.id).update(product);
  }

  removeProduct(productId) {
    return this.productRef.doc(productId).delete();
  }

  getProductsByCategory(categoryId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.productRef.ref.where('categoryId', '==', categoryId).get().then(data => {
      return data.docChanges().map(data => ({
        id: data.doc.id,
        ...data.doc.data()
      }));
    }));
  }

}

ProductService.ɵfac = function ProductService_Factory(t) {
  return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
};

ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProductService,
  factory: ProductService.ɵfac
});

/***/ }),

/***/ 6847:
/*!**********************************************************!*\
  !*** ./src/app/features/client/services/cart.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/store/selectors/auth.selector */ 9480);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);






class CartService {
    constructor(firestore, store) {
        this.firestore = firestore;
        this.store = store;
        this.getCartRef();
        this.getCartId();
        this.getProductRef();
    }
    getCartRef() {
        this.cartRef = this.firestore.collection('/cart');
    }
    getProductRef() {
        this.productRef = this.firestore.collection('/products');
    }
    getCartId() {
        this.store.select(src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUserId).subscribe((id) => (this.cartId = id));
    }
    getCart() {
        return this.cartRef.doc(this.cartId).valueChanges();
    }
    addToCart(productId) {
        return this.cartRef.doc(this.cartId)
            .update({ products: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.arrayUnion(productId) });
    }
    removeFromCart(productId) {
        return this.cartRef.doc(this.cartId)
            .update({ products: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.arrayRemove(productId) });
    }
    //TODO to avoid useless request
    getCartProducts(productIds) {
        const productObservables = productIds.map(productId => {
            const productDoc = this.firestore.collection('products').doc(productId);
            return productDoc.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(snapshot => ({ id: snapshot.id, ...snapshot.data() })));
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)(productObservables);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    FIREBASE_API_KEY: "AIzaSyC0IJRhoZLVFiq5J6zWJlr_GY2LSxcw5Mc",
    FIREBASE_AUTH_DOMAIN: "web-music-store.firebaseapp.com",
    FIREBASE_PROTECTED_ID: "web-music-store",
    FIREBASE_STORAGE_BUCKET: "web-music-store.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "470913716116",
    FIREBASE_APP_ID: "1:470913716116:web:e13c38b08f11be54e58981",
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.e3cc8826013a9bc1.js.map