"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_static_layout_layout_module_ts"],{

/***/ 5584:
/*!**********************************************!*\
  !*** ./src/app/core/enums/user-role.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRole": () => (/* binding */ UserRole)
/* harmony export */ });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["CLIENT"] = 1] = "CLIENT";
})(UserRole || (UserRole = {}));


/***/ }),

/***/ 9073:
/*!********************************************!*\
  !*** ./src/app/core/guards/admin.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _enums_user_role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/user-role.enum */ 5584);
/* harmony import */ var _store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/auth.selector */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/snackbar.service */ 446);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);








class AdminGuard {
    constructor(router, snackBarServise, store) {
        this.router = router;
        this.snackBarServise = snackBarServise;
        this.store = store;
    }
    canActivate(route) {
        this.url = route.routeConfig?.path || '';
        return this.store.select(_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUserRole).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((role) => {
            if (this.url === 'admin' && role === 0) {
                return true;
            }
            else {
                this.router.navigate(['']);
                this.snackBarServise.openSnackBar(`Your role is "${_enums_user_role_enum__WEBPACK_IMPORTED_MODULE_0__.UserRole[1]}". You don't have access to this route!`, 'Forbidden');
                return false;
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/selectors/auth.selector */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);






class AuthGuard {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    canActivate() {
        return this.store.select(_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_0__.selectUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((authenticate) => {
            if (!authenticate) {
                return this.router.createUrlTree(['/auth']);
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3246:
/*!*******************************************!*\
  !*** ./src/app/core/guards/user.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuard": () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _enums_user_role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/user-role.enum */ 5584);
/* harmony import */ var _store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/auth.selector */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/snackbar.service */ 446);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);








class UserGuard {
    constructor(router, snackBarServise, store) {
        this.router = router;
        this.snackBarServise = snackBarServise;
        this.store = store;
    }
    canActivate(route) {
        this.url = route.routeConfig?.path || '';
        return this.store.select(_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUserRole).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((role) => {
            if (this.url === 'client' && role === 1) {
                return true;
            }
            else {
                this.router.navigate(['']);
                this.snackBarServise.openSnackBar(`Your role is "${_enums_user_role_enum__WEBPACK_IMPORTED_MODULE_0__.UserRole[0]}". You don't have access to this route!`, 'Forbidden');
                return false;
            }
        }));
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
UserGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3240:
/*!*********************************************************************!*\
  !*** ./src/app/static/layout/components/footer/footer.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  color: #225582;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQ3dCVTtBRHpCWiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvY29sb3JzXCI7XG5cbnAge1xuICBjb2xvcjogJGR1c2stYmx1ZTtcbn1cbiIsIiRiZy15ZWxsb3c6ICNlZWZmMDA7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRzbm93OiAjZmZmYWZhO1xuJG1pbnRjcmVhbTogI2Y1ZmZmYTtcblxuJGdyYXk6ICM4MDgwODA7XG4kc2xhdGVncmV5OiAjNzA4MDkwO1xuJGxpZ2h0c2xhdGVncmF5OiAjNzc4ODk5O1xuJGxpZ2h0Z3JleTogI2QzZDNkMztcbiRzaWx2ZXI6ICNjMGMwYzA7XG5cbiRwcmltYXJ5LWFjdGl2ZS1ibHVlOiAjMjM2OGVlO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMTA6ICMzZTdmZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0xNTogIzUxOGNmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTIwOiAjNjQ5OWZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMzA6ICM3OGE2ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS00MDogIzhiYjJmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTUwOiAjOWViZmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNjA6ICNiMmNjZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS03MDogI2M1ZDlmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTgwOiAjZDhlNWZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtOTA6ICNlY2YyZmY7XG5cbiRzdGVlbGJsdWU6ICM0NjgyYjQ7XG4kbWlkbmlnaHRibHVlOiAjMTkxOTcwO1xuJGR1c2stYmx1ZTogIzIyNTU4MjtcbiRkdXNrLWJsdWUtaG92ZXI6ICMzOTY2OGU7XG4kbGlnaHRzdGVlbGJsdWU6ICNiMGM0ZGU7XG4kYWxpY2VibHVlOiAjZjBmOGZmO1xuXG4kc3VwcG9ydGl2ZS1ncmVlbi0xMDogIzVhYTY1ODtcbiRzdXBwb3J0aXZlLWdyZWVuLTE1OiAjNzBiMTZlO1xuJHN1cHBvcnRpdmUtZ3JlZW4tNDA6ICNkMWVhY2U7XG4kc3VwcG9ydGl2ZS1ncmVlbi01MDogI2YyZmFmMjtcblxuJHRvbWF0bzogI2ZmNjM0NztcbiRvcmFuZ2VyZWQ6ICNmZjQ1MDA7XG5cbiRyZWQ6ICNkYjIwMmY7XG5cbiRzZWNvbmRhcnktZGFyay1ibHVlLTEwOiAjMGExNjNlO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtMTU6ICM0YzU2NzM7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0yMDogIzY3NzA4OTtcbiRzZWNvbmRhcnktZGFyay1ibHVlLTMwOiAjOTE5OGFjO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtNDA6ICNkMWQ2ZTI7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS00NTogI2VhZWNmMjtcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4493:
/*!*********************************************************************!*\
  !*** ./src/app/static/layout/components/header/header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var src_app_core_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/store/actions/auth.actions */ 6977);
/* harmony import */ var src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/store/selectors/auth.selector */ 9480);
/* harmony import */ var src_app_features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/client/services/cart.service */ 6847);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 4217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);

















function HeaderComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", null, 11)(5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.toPersonalCabinet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.signOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const user_r4 = ctx.ngIf;

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Hi, ", user_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.userRole, " Cabinet");
  }
}

function HeaderComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

class HeaderComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_4__.DestroyableDirective {
  constructor(router, store, cartService, cdr) {
    super();
    this.router = router;
    this.store = store;
    this.cartService = cartService;
    this.cdr = cdr;
    this.roles = ['Admin', 'Client'];
    this.role$ = this.store.select(src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUserRole);
  }

  getUserRole() {
    this.role$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(role => {
      if (typeof role === 'number') {
        this.userRole = this.roles[role];
      }
    });
  }

  ngOnInit() {
    this.cartService.getCart().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(data => {
      if (data && Array.isArray(data.products)) {
        this.amountCartProducts = data.products.length;
        this.cdr.markForCheck();
      }
    });
    this.getUserRole();
  }

  showCart() {
    this.router.navigate(['client/cart']);
  }

  signOut() {
    this.store.dispatch((0,src_app_core_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout)());
  }

  toPersonalCabinet() {
    this.router.navigateByUrl(this.userRole.toLowerCase());
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_features_client_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 22,
  vars: 6,
  consts: [[1, "header"], [1, "left-header-side"], ["mat-button", "", 3, "matMenuTriggerFor"], ["userMenu", "matMenu"], ["mat-menu-item", ""], [1, "right-header-side"], ["mat-mini-fab", "", "color", "secondary", "aria-label", "Cart icon button", 1, "cart-btn", 3, "click"], [1, "indicator"], ["class", "logged-in", 4, "ngIf", "ngIfElse"], ["logouted", ""], [1, "logged-in"], ["authMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "logged-out"], ["mat-raised-button", "", "routerLink", "/auth/sign-in"], ["mat-raised-button", "", "routerLink", "/auth/sign-up"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-menu", null, 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Item 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Item 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Item 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
        return ctx.showCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "add_shopping_cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "small", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 11, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, HeaderComponent_ng_template_20_Template, 5, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.amountCartProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 4, ctx.user$))("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  color: #225582;\n}\n.header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%]   .logged-in[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%]   .logged-in[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%]   .logged-out[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .right-header-side[_ngcontent-%COMP%]   .logged-out[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQ2FNO0FEZFo7QUFNTTs7O0VBRUUsY0FBQTtBQUhSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcblxuICAucmlnaHQtaGVhZGVyLXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAuaW5kaWNhdG9yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICBjb2xvcjogJGR1c2stYmx1ZTtcbiAgICB9XG5cbiAgICAubG9nZ2VkLWluLFxuICAgIC5sb2dnZWQtb3V0IHtcbiAgICAgICYgYSxcbiAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmcteWVsbG93OiAjZWVmZjAwO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kc25vdzogI2ZmZmFmYTtcbiRtaW50Y3JlYW06ICNmNWZmZmE7XG5cbiRncmF5OiAjODA4MDgwO1xuJHNsYXRlZ3JleTogIzcwODA5MDtcbiRsaWdodHNsYXRlZ3JheTogIzc3ODg5OTtcbiRsaWdodGdyZXk6ICNkM2QzZDM7XG4kc2lsdmVyOiAjYzBjMGMwO1xuXG4kcHJpbWFyeS1hY3RpdmUtYmx1ZTogIzIzNjhlZTtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTEwOiAjM2U3ZmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMTU6ICM1MThjZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0yMDogIzY0OTlmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTMwOiAjNzhhNmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNDA6ICM4YmIyZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS01MDogIzllYmZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTYwOiAjYjJjY2ZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNzA6ICNjNWQ5ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS04MDogI2Q4ZTVmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTkwOiAjZWNmMmZmO1xuXG4kc3RlZWxibHVlOiAjNDY4MmI0O1xuJG1pZG5pZ2h0Ymx1ZTogIzE5MTk3MDtcbiRkdXNrLWJsdWU6ICMyMjU1ODI7XG4kZHVzay1ibHVlLWhvdmVyOiAjMzk2NjhlO1xuJGxpZ2h0c3RlZWxibHVlOiAjYjBjNGRlO1xuJGFsaWNlYmx1ZTogI2YwZjhmZjtcblxuJHN1cHBvcnRpdmUtZ3JlZW4tMTA6ICM1YWE2NTg7XG4kc3VwcG9ydGl2ZS1ncmVlbi0xNTogIzcwYjE2ZTtcbiRzdXBwb3J0aXZlLWdyZWVuLTQwOiAjZDFlYWNlO1xuJHN1cHBvcnRpdmUtZ3JlZW4tNTA6ICNmMmZhZjI7XG5cbiR0b21hdG86ICNmZjYzNDc7XG4kb3JhbmdlcmVkOiAjZmY0NTAwO1xuXG4kcmVkOiAjZGIyMDJmO1xuXG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0xMDogIzBhMTYzZTtcbiRzZWNvbmRhcnktZGFyay1ibHVlLTE1OiAjNGM1NjczO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtMjA6ICM2NzcwODk7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0zMDogIzkxOThhYztcbiRzZWNvbmRhcnktZGFyay1ibHVlLTQwOiAjZDFkNmUyO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtNDU6ICNlYWVjZjI7XG4iXX0= */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_3__.State)(src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUser)], HeaderComponent.prototype, "user$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_3__.State)(src_app_core_store_selectors_auth_selector__WEBPACK_IMPORTED_MODULE_1__.selectUserRole)], HeaderComponent.prototype, "role$", void 0);

/***/ }),

/***/ 1717:
/*!********************************************************!*\
  !*** ./src/app/static/layout/layout-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/admin.guard */ 9073);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 7574);
/* harmony import */ var src_app_core_guards_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/guards/user.guard */ 3246);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ 4949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
        children: [
            {
                path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../features/shop/shop.module */ 2813)).then((mod) => mod.ShopModule)
            },
            {
                path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../features/admin/admin.module */ 6394)).then((mod) => mod.AdminModule),
                canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_app_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard],
            },
            {
                path: 'client',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_client_client_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../features/client/client.module */ 8814)).then((mod) => mod.ClientModule),
                canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_app_core_guards_user_guard__WEBPACK_IMPORTED_MODULE_2__.UserGuard],
            },
        ],
    },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 4949:
/*!***************************************************!*\
  !*** ./src/app/static/layout/layout.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 4493);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 3240);




class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 0, consts: [[1, "content-wrapper"], [1, "main-content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".content-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.content-wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0oiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIGZsZXg6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 5681:
/*!************************************************!*\
  !*** ./src/app/static/layout/layout.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 4493);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 3240);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 4949);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ 1717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_static_layout_layout_module_ts.d7be5681d78e7b0e.js.map