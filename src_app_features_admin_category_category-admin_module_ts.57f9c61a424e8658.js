"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_admin_category_category-admin_module_ts"],{

/***/ 2272:
/*!*********************************************************************!*\
  !*** ./src/app/features/admin/category/category-admin.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAdminComponent": () => (/* binding */ CategoryAdminComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/actions/category.actions */ 9053);
/* harmony import */ var src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/store/selectors/category.selectors */ 3507);
/* harmony import */ var src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/constants/messages */ 491);
/* harmony import */ var _components_add_category_form_add_category_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-category-form/add-category-form.component */ 8855);
/* harmony import */ var _constants_more_options_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/more-options.constant */ 2048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/confirm.service */ 545);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_components_more_option_more_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/more-option/more-options.component */ 9963);
/* harmony import */ var _components_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/update-category/update-category.component */ 3846);





















function CategoryAdminComponent_ng_container_4_div_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](category_r15.name);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_4_app_update_category_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-update-category", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("toViewMode", function CategoryAdminComponent_ng_container_4_div_1_td_4_app_update_category_2_Template_app_update_category_toViewMode_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.toViewMode());
    })("update", function CategoryAdminComponent_ng_container_4_div_1_td_4_app_update_category_2_Template_app_update_category_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.updateCategory($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("categoryName", category_r15.name);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CategoryAdminComponent_ng_container_4_div_1_td_4_span_1_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CategoryAdminComponent_ng_container_4_div_1_td_4_app_update_category_2_Template, 1, 1, "app-update-category", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", category_r15.id !== ctx_r6.editedCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.editMode && category_r15.id === ctx_r6.editedCategoryId);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, category_r23.createdAt), " ");
  }
}

function CategoryAdminComponent_ng_container_4_div_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Category id");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](category_r24.id);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " More options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function CategoryAdminComponent_ng_container_4_div_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 23)(1, "app-more-options", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("update", function CategoryAdminComponent_ng_container_4_div_1_td_13_Template_app_more_options_update_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const category_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.editCategory(category_r25));
    })("delete", function CategoryAdminComponent_ng_container_4_div_1_td_13_Template_app_more_options_delete_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const category_r25 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.removeCategory(category_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("moreOptions", ctx_r12.moreOptions);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 25);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 26);
  }
}

function CategoryAdminComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CategoryAdminComponent_ng_container_4_div_1_th_3_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CategoryAdminComponent_ng_container_4_div_1_td_4_Template, 3, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CategoryAdminComponent_ng_container_4_div_1_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CategoryAdminComponent_ng_container_4_div_1_td_7_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CategoryAdminComponent_ng_container_4_div_1_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CategoryAdminComponent_ng_container_4_div_1_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](11, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CategoryAdminComponent_ng_container_4_div_1_th_12_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CategoryAdminComponent_ng_container_4_div_1_td_13_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CategoryAdminComponent_ng_container_4_div_1_tr_14_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CategoryAdminComponent_ng_container_4_div_1_tr_15_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const categories_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", categories_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
  }
}

function CategoryAdminComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CategoryAdminComponent_ng_container_4_div_1_Template, 16, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const categories_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", categories_r3.length > 0)("ngIfElse", _r1);
  }
}

function CategoryAdminComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Category list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

class CategoryAdminComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__.DestroyableDirective {
  constructor(store, actions, dialog, confirmService) {
    super();
    this.store = store;
    this.actions = actions;
    this.dialog = dialog;
    this.confirmService = confirmService;
    this.editMode = false;
    this.displayedColumns = ['categoryName', 'createdAt', 'categoryId', 'options'];
    this.moreOptions = _constants_more_options_constant__WEBPACK_IMPORTED_MODULE_6__.CategoryOptions;
  }

  ngOnInit() {
    this.isCategoryUpdated();
  }

  isCategoryUpdated() {
    this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.ofType)(src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__.updateCategorySuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(() => {
      this.toViewMode();
    });
  }

  toViewMode() {
    this.editMode = false;
    this.editedCategoryId = undefined;
  }

  editCategory(category) {
    this.editedCategoryId = category.id;
    this.editMode = true;
  }

  updateCategory(event) {
    if (this.editedCategoryId) {
      this.store.dispatch((0,src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__.updateCategory)({
        categoryName: event,
        categoryId: this.editedCategoryId
      }));
    }
  }

  removeCategory(category) {
    this.confirmService.confirm(src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_4__.DELETE_RECORD_TEXT).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(() => {
      this.store.dispatch((0,src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__.removeCategory)({
        categoryId: category.id
      }));
    });
  }

  openCategoryForm() {
    this.dialog.open(_components_add_category_form_add_category_form_component__WEBPACK_IMPORTED_MODULE_5__.AddCategoryFormComponent, {
      height: '300px',
      width: '400px'
    });
  }

}

CategoryAdminComponent.ɵfac = function CategoryAdminComponent_Factory(t) {
  return new (t || CategoryAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_7__.ConfirmService));
};

CategoryAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: CategoryAdminComponent,
  selectors: [["app-category-admin"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 3,
  consts: [[1, "content-wrapper"], [1, "add-category"], ["mat-button", "", 1, "add-category-btn", 3, "click"], [4, "ngIf"], ["noCategories", ""], ["class", "table-wrap", 4, "ngIf", "ngIfElse"], [1, "table-wrap"], ["mat-table", "", "aria-describedby", "category-table", 3, "dataSource"], ["matColumnDef", "categoryName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "createdAt"], ["matColumnDef", "categoryId"], ["matColumnDef", "options"], ["mat-header-cell", "", "class", "more-options", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "more-options", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "categoryName", "toViewMode", "update", 4, "ngIf"], [3, "categoryName", "toViewMode", "update"], ["mat-header-cell", "", 1, "more-options"], ["mat-cell", "", 1, "more-options"], [3, "moreOptions", "update", "delete"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"]],
  template: function CategoryAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryAdminComponent_Template_button_click_2_listener() {
        return ctx.openCategoryForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CategoryAdminComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CategoryAdminComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 1, ctx.categories$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _shared_components_more_option_more_options_component__WEBPACK_IMPORTED_MODULE_8__.MoreOptionsComponent, _components_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_9__.UpdateCategoryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".content-wrapper[_ngcontent-%COMP%]   .add-category[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBRkoiLCJmaWxlIjoiY2F0ZWdvcnktYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICAuYWRkLWNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbiJdfQ== */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCategories)], CategoryAdminComponent.prototype, "categories$", void 0);

/***/ }),

/***/ 4018:
/*!******************************************************************!*\
  !*** ./src/app/features/admin/category/category-admin.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAdminModule": () => (/* binding */ CategoryAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_add_category_form_add_category_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-category-form/add-category-form.component */ 8855);
/* harmony import */ var _category_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-admin.component */ 2272);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/update-category/update-category.component */ 3846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class CategoryAdminModule {
}
CategoryAdminModule.ɵfac = function CategoryAdminModule_Factory(t) { return new (t || CategoryAdminModule)(); };
CategoryAdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CategoryAdminModule });
CategoryAdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _category_admin_component__WEBPACK_IMPORTED_MODULE_1__.CategoryAdminComponent }])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CategoryAdminModule, { declarations: [_category_admin_component__WEBPACK_IMPORTED_MODULE_1__.CategoryAdminComponent,
        _components_add_category_form_add_category_form_component__WEBPACK_IMPORTED_MODULE_0__.AddCategoryFormComponent,
        _components_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_3__.UpdateCategoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 8855:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/admin/category/components/add-category-form/add-category-form.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryFormComponent": () => (/* binding */ AddCategoryFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/actions/category.actions */ 9053);
/* harmony import */ var src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/store/selectors/category.selectors */ 3507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);

















class AddCategoryFormComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__.DestroyableDirective {
  constructor(store, actions, dialogRef) {
    super();
    this.store = store;
    this.actions = actions;
    this.dialogRef = dialogRef;
  }

  ngOnInit() {
    this.initCategoryForm();
  }

  initCategoryForm() {
    this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  addCategory() {
    const {
      categoryName
    } = this.categoryForm.getRawValue();
    this.store.dispatch((0,src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__.addCategory)({
      name: categoryName
    }));
    this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_store_actions_category_actions__WEBPACK_IMPORTED_MODULE_2__.addCategorySuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
      this.categoryForm.reset();
      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

AddCategoryFormComponent.ɵfac = function AddCategoryFormComponent_Factory(t) {
  return new (t || AddCategoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};

AddCategoryFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddCategoryFormComponent,
  selectors: [["app-add-category-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 14,
  vars: 4,
  consts: [[1, "dialog"], [1, "close-dialog", 3, "click"], ["mat-dialog-title", "", 1, "dialog-title"], [3, "formGroup", "submit"], ["mat-dialog-content", "", 1, "dialog-content"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter category name", "formControlName", "categoryName", "required", ""], ["type", "submit", "mat-button", "", 1, "submit", "dialog-actions", 3, "disabled"]],
  template: function AddCategoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCategoryFormComponent_Template_span_click_1_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u2716");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Category form");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function AddCategoryFormComponent_Template_form_submit_5_listener() {
        return ctx.addCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Enter category name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Add category ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.categoryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 2, ctx.isLoading$));
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".dialog[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dialog[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dialog[_ngcontent-%COMP%]   .close-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n.dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  height: 170px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJhZGQtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmRpYWxvZy10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNsb3NlLWRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBmb3JtIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuIl19 */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCategoryIsLoading)], AddCategoryFormComponent.prototype, "isLoading$", void 0);

/***/ }),

/***/ 3846:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/admin/category/components/update-category/update-category.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCategoryComponent": () => (/* binding */ UpdateCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);




class UpdateCategoryComponent {
    constructor(host) {
        this.host = host;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.editMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.toViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get element() {
        return this.host.nativeElement;
    }
    ngOnInit() {
        this.editModeHandler();
    }
    editModeHandler() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(({ target }) => !this.element.contains(target)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => this.viewMode());
    }
    viewMode() {
        this.toViewMode.emit(true);
    }
    updateCategory() {
        const inputValue = this.categoryName.trim();
        if (inputValue) {
            this.update.emit(inputValue);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
UpdateCategoryComponent.ɵfac = function UpdateCategoryComponent_Factory(t) { return new (t || UpdateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
UpdateCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateCategoryComponent, selectors: [["app-update-category"]], inputs: { categoryName: "categoryName" }, outputs: { toViewMode: "toViewMode", update: "update" }, decls: 6, vars: 1, consts: [[1, "editable-input"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "btn-icon", 3, "click"]], template: function UpdateCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateCategoryComponent_Template_input_ngModelChange_1_listener($event) { return ctx.categoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateCategoryComponent_Template_span_click_2_listener() { return ctx.updateCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2713");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateCategoryComponent_Template_span_click_4_listener() { return ctx.viewMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2717");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categoryName);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: [".editable-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 45px;\n}\n.editable-input[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #708090;\n  margin-left: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJ1cGRhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi5lZGl0YWJsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICRzbGF0ZWdyZXk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=src_app_features_admin_category_category-admin_module_ts.57f9c61a424e8658.js.map