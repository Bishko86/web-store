"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_shop_showcase_showcase_module_ts"],{

/***/ 866:
/*!********************************************************************************************!*\
  !*** ./src/app/features/shop/showcase/components/category-list/category-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/store/actions/product.action */ 2296);
/* harmony import */ var src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/selectors/category.selectors */ 3507);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);











function CategoryListComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryListComponent_ng_container_0_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const category_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.showCategory(category_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", category_r3.name, " ");
  }
}

function CategoryListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CategoryListComponent_ng_container_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const categories_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", categories_r1);
  }
}

class CategoryListComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_3__.DestroyableDirective {
  constructor(store, router, route) {
    super();
    this.store = store;
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.subscribeForRoute();
  }

  showCategory(category) {
    if (category.id) {
      this.store.dispatch((0,src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_1__.getProductsByCategory)({
        id: category.id
      }));
      this.router.navigate([`category/${category.name}`], {
        state: {
          id: category.id
        }
      });
    }
  }

  subscribeForRoute() {
    this.route.children[0]?.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
      this.categoryName = data.name;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.categories$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(categories => {
      const category = categories.find(category => category.name === this.categoryName);

      if (category) {
        this.showCategory(category);
      }
    });
  }

}

CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
  return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};

CategoryListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CategoryListComponent,
  selectors: [["app-category-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "categories"], ["class", "category", 3, "click", 4, "ngFor", "ngForOf"], [1, "category", 3, "click"]],
  template: function CategoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CategoryListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.categories$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: [".categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n}\n.categories[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiA4cHg7XG5cbiAgLmNhdGVnb3J5IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCategories)], CategoryListComponent.prototype, "categories$", void 0);

/***/ }),

/***/ 4190:
/*!**********************************************************************************!*\
  !*** ./src/app/features/shop/showcase/components/category/category.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/selectors/product.selectors */ 9497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-card/product-card.component */ 6919);










function CategoryComponent_ng_container_0_app_product_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-product-card", 4);
  }

  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r3);
  }
}

function CategoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CategoryComponent_ng_container_0_app_product_card_5_Template, 1, 1, "app-product-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const products_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", products_r1);
  }
}

class CategoryComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__.DestroyableDirective {
  constructor(route) {
    super();
    this.route = route;
  }

  ngOnInit() {
    this.getCategoryName();
  }

  getCategoryName() {
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(data => {
      this.categoryName = data.name;
    });
  }

}

CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
  return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CategoryComponent,
  selectors: [["app-category"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "category__container"], [1, "category__showcase"], ["class", "category__showcase__card", 3, "product", 4, "ngFor", "ngForOf"], [1, "category__showcase__card", 3, "product"]],
  template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CategoryComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.categoryProducts$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".category__container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.category__showcase[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQURKIiwiZmlsZSI6ImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5IHtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgJl9fc2hvd2Nhc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG4iXX0= */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_2__.selectProducts)], CategoryComponent.prototype, "categoryProducts$", void 0);

/***/ }),

/***/ 3230:
/*!******************************************************************************!*\
  !*** ./src/app/features/shop/showcase/components/filter/filter.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], decls: 2, vars: 0, template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "filter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6919:
/*!******************************************************************************************!*\
  !*** ./src/app/features/shop/showcase/components/product-card/product-card.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/store/actions/user.actions */ 3606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);






function ProductCardComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const photo_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", photo_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", photo_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.product.price, " $");
} }
class ProductCardComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.iconName = 'white-heart-50.png';
    }
    addToCart(product) {
        this.store.dispatch((0,src_app_core_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.addProductToCart)({ productId: product.id }));
    }
    reviewProduct() {
        console.error(this.product);
        this.router.navigate([`product/${this.product.name}`]);
    }
    onMouseEnter() {
        this.iconName = 'black-heart-50.png';
    }
    onMouseLeave() {
        this.iconName = 'white-heart-50.png';
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
ProductCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 9, vars: 3, consts: [[1, "product__container"], [3, "mouseenter", "mouseleave"], ["alt", "save", "width", "20", 3, "src"], [1, "product__area", 3, "click"], [1, "product__title"], [4, "ngIf"], ["mat-button", "", 1, "add-category-btn", 3, "click"], ["width", "250", "height", "250", 3, "src", "alt"], [1, "product__price"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function ProductCardComponent_Template_span_mouseenter_1_listener() { return ctx.onMouseEnter(); })("mouseleave", function ProductCardComponent_Template_span_mouseleave_1_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_Template_div_click_3_listener() { return ctx.reviewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductCardComponent_ng_container_6_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_7_listener() { return ctx.addToCart(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/icons/" + ctx.iconName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product.photo[0]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: [".product__container[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid black;\n  background-color: #fff;\n  width: 300px;\n  height: 400px;\n}\n.product__title[_ngcontent-%COMP%] {\n  margin: 8px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7QUFESiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogOHB4IDAgMTBweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 4078:
/*!**************************************************************!*\
  !*** ./src/app/features/shop/showcase/showcase.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* binding */ ShowcaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/store/actions/category.actions */ 9053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter/filter.component */ 3230);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 866);






class ShowcaseComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch((0,src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_0__.getCategories)());
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
ShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["app-showcase"]], decls: 9, vars: 0, consts: [[1, "shop-wrapper"], [1, "sidebar"], [1, "categories"], [1, "main"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-category-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent, _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent], styles: [".shop-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 3fr 9fr;\n  grid-gap: 10px;\n}\n.shop-wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background-color: #eeff00;\n  padding: 0 20px;\n}\n.shop-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  background-color: #225582;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBREY7QUFHRTtFQUNFLHlCQ1RRO0VEVVIsZUFBQTtBQURKO0FBSUU7RUFDRSx5QkNhUTtBRGZaIiwiZmlsZSI6InNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xuXG4uc2hvcC13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA5ZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuXG4gIC5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmcteWVsbG93O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHVzay1ibHVlO1xuICB9XG59XG4iLCIkYmcteWVsbG93OiAjZWVmZjAwO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kc25vdzogI2ZmZmFmYTtcbiRtaW50Y3JlYW06ICNmNWZmZmE7XG5cbiRncmF5OiAjODA4MDgwO1xuJHNsYXRlZ3JleTogIzcwODA5MDtcbiRsaWdodHNsYXRlZ3JheTogIzc3ODg5OTtcbiRsaWdodGdyZXk6ICNkM2QzZDM7XG4kc2lsdmVyOiAjYzBjMGMwO1xuXG4kcHJpbWFyeS1hY3RpdmUtYmx1ZTogIzIzNjhlZTtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTEwOiAjM2U3ZmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMTU6ICM1MThjZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0yMDogIzY0OTlmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTMwOiAjNzhhNmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNDA6ICM4YmIyZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS01MDogIzllYmZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTYwOiAjYjJjY2ZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNzA6ICNjNWQ5ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS04MDogI2Q4ZTVmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTkwOiAjZWNmMmZmO1xuXG4kc3RlZWxibHVlOiAjNDY4MmI0O1xuJG1pZG5pZ2h0Ymx1ZTogIzE5MTk3MDtcbiRkdXNrLWJsdWU6ICMyMjU1ODI7XG4kZHVzay1ibHVlLWhvdmVyOiAjMzk2NjhlO1xuJGxpZ2h0c3RlZWxibHVlOiAjYjBjNGRlO1xuJGFsaWNlYmx1ZTogI2YwZjhmZjtcblxuJHN1cHBvcnRpdmUtZ3JlZW4tMTA6ICM1YWE2NTg7XG4kc3VwcG9ydGl2ZS1ncmVlbi0xNTogIzcwYjE2ZTtcbiRzdXBwb3J0aXZlLWdyZWVuLTQwOiAjZDFlYWNlO1xuJHN1cHBvcnRpdmUtZ3JlZW4tNTA6ICNmMmZhZjI7XG5cbiR0b21hdG86ICNmZjYzNDc7XG4kb3JhbmdlcmVkOiAjZmY0NTAwO1xuXG4kcmVkOiAjZGIyMDJmO1xuXG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0xMDogIzBhMTYzZTtcbiRzZWNvbmRhcnktZGFyay1ibHVlLTE1OiAjNGM1NjczO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtMjA6ICM2NzcwODk7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0zMDogIzkxOThhYztcbiRzZWNvbmRhcnktZGFyay1ibHVlLTQwOiAjZDFkNmUyO1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtNDU6ICNlYWVjZjI7XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 2448:
/*!***********************************************************!*\
  !*** ./src/app/features/shop/showcase/showcase.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseModule": () => (/* binding */ ShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showcase.component */ 4078);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter/filter.component */ 3230);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category/category.component */ 4190);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 866);
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-card/product-card.component */ 6919);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    {
        path: '',
        component: _showcase_component__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent,
        children: [
            { path: 'category/:name', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__.CategoryComponent },
        ],
    },
];
class ShowcaseModule {
}
ShowcaseModule.ɵfac = function ShowcaseModule_Factory(t) { return new (t || ShowcaseModule)(); };
ShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ShowcaseModule });
ShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ShowcaseModule, { declarations: [_showcase_component__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent,
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent,
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__.CategoryListComponent,
        _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__.CategoryComponent,
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__.ProductCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_shop_showcase_showcase_module_ts.6d7ee332cdf61a6e.js.map