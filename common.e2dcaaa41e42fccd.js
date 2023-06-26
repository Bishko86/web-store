"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["common"],{

/***/ 545:
/*!**************************************************!*\
  !*** ./src/app/core/services/confirm.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmService": () => (/* binding */ ConfirmService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/confirm/confirm.component */ 8392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);




class ConfirmService {
    constructor(dialog) {
        this.dialog = dialog;
        this.isAllowed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    confirm(message) {
        this.dialog
            .open(src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
            data: message,
            width: 'auto',
            height: '180px',
        })
            .afterClosed()
            .subscribe((confirm) => {
            if (confirm) {
                this.isAllowed.next(true);
            }
            else {
                this.isAllowed.next(false);
            }
        });
        return this.isAllowed;
    }
}
ConfirmService.ɵfac = function ConfirmService_Factory(t) { return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
ConfirmService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfirmService, factory: ConfirmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3507:
/*!************************************************************!*\
  !*** ./src/app/core/store/selectors/category.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCategories": () => (/* binding */ selectCategories),
/* harmony export */   "selectCategoryError": () => (/* binding */ selectCategoryError),
/* harmony export */   "selectCategoryIsLoading": () => (/* binding */ selectCategoryIsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectFeature = (state) => state.category;
const selectCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.categories);
const selectCategoryError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.error);
const selectCategoryIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.isLoading);


/***/ }),

/***/ 9497:
/*!***********************************************************!*\
  !*** ./src/app/core/store/selectors/product.selectors.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectProductIsLoading": () => (/* binding */ selectProductIsLoading),
/* harmony export */   "selectProducts": () => (/* binding */ selectProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectFeature = (state) => state.product;
const selectProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.products);
const selectProductIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, (state) => state.isLoading);


/***/ }),

/***/ 2048:
/*!*******************************************************************!*\
  !*** ./src/app/features/admin/constants/more-options.constant.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryOptions": () => (/* binding */ CategoryOptions),
/* harmony export */   "UserGridOptions": () => (/* binding */ UserGridOptions)
/* harmony export */ });
/* harmony import */ var src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums/material-icon.enum */ 3521);
/* harmony import */ var src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums/more-option-action.enum */ 5628);


const CategoryOptions = [
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.EDIT,
        text: 'Edit Category',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.Update
    },
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.ADD_SHOPPING_CART,
        text: 'Add product to',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.Add
    },
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.DELETE,
        text: 'Delete Category',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.Delete
    },
];
const UserGridOptions = [
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.PROFILE,
        text: 'User Profile',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.Open,
    },
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.ADD_SHOPPING_CART,
        text: 'User orders',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.ShowUp,
    },
    {
        icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_0__.MatIcon.DELETE,
        text: 'Delete User',
        action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_1__.MoreOptionAction.Delete,
    },
];


/***/ }),

/***/ 491:
/*!**********************************************!*\
  !*** ./src/app/shared/constants/messages.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANCEL_CONFIRM_TEXT": () => (/* binding */ CANCEL_CONFIRM_TEXT),
/* harmony export */   "DELETE_CONFIRM_TEXT": () => (/* binding */ DELETE_CONFIRM_TEXT),
/* harmony export */   "DELETE_RECORD_TEXT": () => (/* binding */ DELETE_RECORD_TEXT),
/* harmony export */   "TOO_MANY_FILES": () => (/* binding */ TOO_MANY_FILES)
/* harmony export */ });
const TOO_MANY_FILES = (amount) => `You can upload a maximum of ${amount} files`;
const CANCEL_CONFIRM_TEXT = 'Are you sure you want to cancel? All data will be deleted.';
const DELETE_RECORD_TEXT = 'Are you sure you want to delete?';
const DELETE_CONFIRM_TEXT = 'Are you sure you want to leave this page without saving?';


/***/ })

}]);
//# sourceMappingURL=common.e2dcaaa41e42fccd.js.map