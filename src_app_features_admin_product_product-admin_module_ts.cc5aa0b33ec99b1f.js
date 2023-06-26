"use strict";
(self["webpackChunkweb_store"] = self["webpackChunkweb_store"] || []).push([["src_app_features_admin_product_product-admin_module_ts"],{

/***/ 7757:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/admin/product/components/add-product-form/add-product-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductFormComponent": () => (/* binding */ AddProductFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/store/actions/product.action */ 2296);
/* harmony import */ var src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/store/selectors/category.selectors */ 3507);
/* harmony import */ var src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/store/selectors/product.selectors */ 9497);
/* harmony import */ var src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/constants/messages */ 491);
/* harmony import */ var src_app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enums/message-types.enum */ 8975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_core_services_upload_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/upload-file.service */ 104);
/* harmony import */ var src_app_core_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/snackbar.service */ 446);
/* harmony import */ var src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/confirm.service */ 545);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _core_directives_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/directives/drag-drop-file-upload.directive */ 2419);
/* harmony import */ var _upload_image_card_upload_image_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../upload-image-card/upload-image-card.component */ 8721);































function AddProductFormComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](category_r3.name);
  }
}

function AddProductFormComponent_app_upload_image_card_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-upload-image-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("cancelUpload", function AddProductFormComponent_app_upload_image_card_44_Template_app_upload_image_card_cancelUpload_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.cancelUploadImage($event));
    })("deleteProduct", function AddProductFormComponent_app_upload_image_card_44_Template_app_upload_image_card_deleteProduct_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDeleteProductPhoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("file", file_r4);
  }
}

class AddProductFormComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__.DestroyableDirective {
  constructor(store, dialogRef, actions$, fileUploadService, cdr, snackbarService, confirmService, dialogData) {
    super();
    this.store = store;
    this.dialogRef = dialogRef;
    this.actions$ = actions$;
    this.fileUploadService = fileUploadService;
    this.cdr = cdr;
    this.snackbarService = snackbarService;
    this.confirmService = confirmService;
    this.dialogData = dialogData;
    this.accept = 'image/png, image/jpeg';
    this.isEditMode = false;
    this.files = [];
  }

  get photoControl() {
    return this.productForm.controls['photo'];
  }

  initProductForm() {
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.dialogData?.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.dialogData?.price || null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.dialogData?.categoryId || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.dialogData?.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.dialogData?.photo || [])
    });
  }

  ngOnInit() {
    this.initProductForm();
    this.updateFileList();

    if (this.dialogData) {
      this.isEditMode = true;
      this.files = [...this.dialogData.photo];
    }
  }

  saveProduct() {
    const product = { ...(this.isEditMode && {
        id: this.dialogData.id
      }),
      ...this.productForm.value,
      createdAt: this.isEditMode ? this.dialogData.createdAt : Date.now()
    };

    if (this.isEditMode) {
      this.store.dispatch((0,src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_2__.updateProduct)({
        product
      }));
    } else {
      this.store.dispatch((0,src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_2__.addProduct)({
        product
      }));
    }

    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_2__.ProductActions.UPDATE_PRODUCT_SUCCESS, src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_2__.ProductActions.ADD_PRODUCT_SUCCESS), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe(() => this.dialogRef.close());
  }

  onFileDropped(event) {
    this.prepareFilesList(Object.values(event));
  }

  fileBrowseHandler(event) {
    const files = Object.values(event.target.files || {});
    this.prepareFilesList(files);
  }

  prepareFilesList(files) {
    if (this.showWarningSnackBar(files.length + this.files.length)) {
      return;
    }

    files.forEach(file => {
      const angularFireUploadTask = this.uploadFile(file);
      const uploadFile = {
        url: null,
        name: file.name,
        size: file.size,
        progress$: angularFireUploadTask.percentageChanges(),
        cancel: angularFireUploadTask.cancel
      };
      this.files = this.files.concat(uploadFile);
    });
  }

  showWarningSnackBar(length) {
    if (length > 6) {
      this.snackbarService.openSnackBar((0,src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_5__.TOO_MANY_FILES)(6), src_app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_6__.MessageTypes.FORBIDDEN, 4000);
      return true;
    }

    return false;
  }

  uploadFile(file) {
    return this.fileUploadService.pushFileToStorage(file);
  }

  updateFileList() {
    this.fileUploadService.uploadedFiles$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe(productPhoto => {
      this.cdr.markForCheck();
      this.photoControl?.setValue([productPhoto, ...this.photoControl.value]);
      this.files = this.files.map(file => {
        if (file.name === productPhoto.name) {
          return { ...file,
            url: productPhoto.url
          };
        }

        return file;
      });
    });
  }

  onDeleteProductPhoto(photoName) {
    this.fileUploadService.deleteFile(photoName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe({
      next: () => this.deleteProductPhoto(photoName),
      error: () => this.deleteProductPhoto(photoName)
    });
  }

  deleteProductPhoto(photoName) {
    const productPhotos = this.photoControl?.getRawValue().filter(imag => imag.name !== photoName);
    this.photoControl?.setValue(productPhotos);
    this.files = productPhotos;
    this.cdr.markForCheck();
  }

  closeDialog() {
    if (this.productForm.dirty) {
      this.confirmService.confirm(src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_5__.DELETE_CONFIRM_TEXT).subscribe(isConfirmed => {
        if (isConfirmed) {
          this.dialogRef.close();
        }
      });
    } else {
      this.dialogRef.close();
    }
  }

  cancelUploadImage(canceledFile) {
    canceledFile.cancel && canceledFile.cancel();
    this.files = this.files.filter(file => file.name !== canceledFile.name);
  }

}

AddProductFormComponent.ɵfac = function AddProductFormComponent_Factory(t) {
  return new (t || AddProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_upload_file_service__WEBPACK_IMPORTED_MODULE_7__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_9__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA));
};

AddProductFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AddProductFormComponent,
  selectors: [["app-add-product-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 45,
  vars: 8,
  consts: [[1, "product-form-wrap"], [1, "close-dialog"], ["mat-icon-button", "", "aria-label", "close dialog", 3, "click"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "form-container"], [3, "formGroup", "submit"], [1, "row"], [1, "input-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter product name", "required", "", "formControlName", "name"], ["matInput", "", "type", "number", "placeholder", "Enter product price", "required", "", "formControlName", "price"], ["formControlName", "categoryId"], [4, "ngFor", "ngForOf"], ["appDragDropFileUpload", "", 1, "drag-and-drop-area", 3, "fileDropped"], ["type", "file", "id", "fileDropRef", "multiple", "", 3, "change"], ["fileDropRef", ""], ["src", "assets/icons/drag-and-drop.svg", "alt", "drag-and-drop"], ["for", "fileDropRef"], ["appearance", "outline", 1, "text-area"], ["matInput", "", "rows", "10", "formControlName", "description"], ["mat-button", "", "color", "primary", 1, "add-product-btn", "submit", 3, "disabled"], [1, "image-list"], [3, "file", "cancelUpload", "deleteProduct", 4, "ngFor", "ngForOf"], [3, "value"], [3, "file", "cancelUpload", "deleteProduct"]],
  template: function AddProductFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddProductFormComponent_Template_button_click_2_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Product form");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4)(8, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submit", function AddProductFormComponent_Template_form_submit_8_listener() {
        return ctx.saveProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "mat-form-field", 8)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Product name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "mat-form-field", 8)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Product price");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "mat-form-field", 8)(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, AddProductFormComponent_ng_container_23_Template, 3, 2, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fileDropped", function AddProductFormComponent_Template_div_fileDropped_25_listener($event) {
        return ctx.onFileDropped($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AddProductFormComponent_Template_input_change_26_listener($event) {
        return ctx.fileBrowseHandler($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Drag and drop file here");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "or");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Browse for file");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "mat-form-field", 18)(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "textarea", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](41, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, AddProductFormComponent_app_upload_image_card_44_Template, 1, 1, "app-upload-image-card", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.productForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 4, ctx.categories$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](41, 6, ctx.isLoading$) || ctx.productForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.files);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _core_directives_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_10__.DragDropFileUploadDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _upload_image_card_upload_image_card_component__WEBPACK_IMPORTED_MODULE_11__.UploadImageCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
  styles: [".product-form-wrap[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 60px 20px 0;\n}\n.product-form-wrap[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.product-form-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-form-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n}\n.product-form-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.product-form-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product-form-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.drag-and-drop-area[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 204px;\n  padding: 16px;\n  margin: 4px 0 0 25px;\n  text-align: center;\n  border: dashed 1px #677089;\n  border-radius: 8px;\n  position: relative;\n}\n.drag-and-drop-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.drag-and-drop-area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  width: 170px;\n  height: 20px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n  margin-top: 4px;\n}\n.drag-and-drop-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #4c5673;\n  margin: 12px;\n}\n.image-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpKO0FBTUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7QUFMTjtBQVFJO0VBQ0UsV0FBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0FBUE47QUFZQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFUSjtBQVlFO0VBQ0UscUJBQUE7RUFDQSxjQ3hESTtFRHlESixZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJDdEJFO0VEdUJGLGlCQUFBO0VBQ0EsZUFBQTtBQVZKO0FBYUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzNCcUI7RUQ0QnJCLFlBQUE7QUFYSjtBQWVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFaRiIsImZpbGUiOiJhZGQtcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xuXG4ucHJvZHVjdC1mb3JtLXdyYXAge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA2MHB4IDIwcHggMDtcbiAgfVxuXG4gIC5kaWFsb2ctdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnRleHQtYXJlYSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3VibWl0IHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmRyYWctYW5kLWRyb3AtYXJlYSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiA0cHggMCAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICRzZWNvbmRhcnktZGFyay1ibHVlLTIwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktZGFyay1ibHVlLTE1O1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxufVxuXG4uaW1hZ2UtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuIiwiJGJnLXllbGxvdzogI2VlZmYwMDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHNub3c6ICNmZmZhZmE7XG4kbWludGNyZWFtOiAjZjVmZmZhO1xuXG4kZ3JheTogIzgwODA4MDtcbiRzbGF0ZWdyZXk6ICM3MDgwOTA7XG4kbGlnaHRzbGF0ZWdyYXk6ICM3Nzg4OTk7XG4kbGlnaHRncmV5OiAjZDNkM2QzO1xuJHNpbHZlcjogI2MwYzBjMDtcblxuJHByaW1hcnktYWN0aXZlLWJsdWU6ICMyMzY4ZWU7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0xMDogIzNlN2ZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTE1OiAjNTE4Y2ZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtMjA6ICM2NDk5ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS0zMDogIzc4YTZmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTQwOiAjOGJiMmZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtNTA6ICM5ZWJmZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS02MDogI2IyY2NmZjtcbiRwcmltYXJ5LWFjdGl2ZS1ibHVlLTcwOiAjYzVkOWZmO1xuJHByaW1hcnktYWN0aXZlLWJsdWUtODA6ICNkOGU1ZmY7XG4kcHJpbWFyeS1hY3RpdmUtYmx1ZS05MDogI2VjZjJmZjtcblxuJHN0ZWVsYmx1ZTogIzQ2ODJiNDtcbiRtaWRuaWdodGJsdWU6ICMxOTE5NzA7XG4kZHVzay1ibHVlOiAjMjI1NTgyO1xuJGR1c2stYmx1ZS1ob3ZlcjogIzM5NjY4ZTtcbiRsaWdodHN0ZWVsYmx1ZTogI2IwYzRkZTtcbiRhbGljZWJsdWU6ICNmMGY4ZmY7XG5cbiRzdXBwb3J0aXZlLWdyZWVuLTEwOiAjNWFhNjU4O1xuJHN1cHBvcnRpdmUtZ3JlZW4tMTU6ICM3MGIxNmU7XG4kc3VwcG9ydGl2ZS1ncmVlbi00MDogI2QxZWFjZTtcbiRzdXBwb3J0aXZlLWdyZWVuLTUwOiAjZjJmYWYyO1xuXG4kdG9tYXRvOiAjZmY2MzQ3O1xuJG9yYW5nZXJlZDogI2ZmNDUwMDtcblxuJHJlZDogI2RiMjAyZjtcblxuJHNlY29uZGFyeS1kYXJrLWJsdWUtMTA6ICMwYTE2M2U7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS0xNTogIzRjNTY3MztcbiRzZWNvbmRhcnktZGFyay1ibHVlLTIwOiAjNjc3MDg5O1xuJHNlY29uZGFyeS1kYXJrLWJsdWUtMzA6ICM5MTk4YWM7XG4kc2Vjb25kYXJ5LWRhcmstYmx1ZS00MDogI2QxZDZlMjtcbiRzZWNvbmRhcnktZGFyay1ibHVlLTQ1OiAjZWFlY2YyO1xuIl19 */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_4__.selectProductIsLoading)], AddProductFormComponent.prototype, "isLoading$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCategories)], AddProductFormComponent.prototype, "categories$", void 0);

/***/ }),

/***/ 8721:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/admin/product/components/upload-image-card/upload-image-card.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadImageCardComponent": () => (/* binding */ UploadImageCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/progress/progress.component */ 7043);
/* harmony import */ var _shared_pipes_file_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/pipes/file-format.pipe */ 7392);








function UploadImageCardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UploadImageCardComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onDeleteProductPhoto(ctx_r4.file.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function UploadImageCardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UploadImageCardComponent_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.cancelUploadImage(ctx_r6.file));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function UploadImageCardComponent_app_progress_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-progress", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("progress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r3.file.progress$));
  }
}

class UploadImageCardComponent {
  constructor() {
    this.deleteProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cancelUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  onDeleteProductPhoto(productName) {
    this.deleteProduct.emit(productName);
  }

  cancelUploadImage(file) {
    this.cancelUpload.emit(file);
  }

}

UploadImageCardComponent.ɵfac = function UploadImageCardComponent_Factory(t) {
  return new (t || UploadImageCardComponent)();
};

UploadImageCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UploadImageCardComponent,
  selectors: [["app-upload-image-card"]],
  inputs: {
    file: "file"
  },
  outputs: {
    deleteProduct: "deleteProduct",
    cancelUpload: "cancelUpload"
  },
  decls: 13,
  vars: 8,
  consts: [[1, "image"], [1, "image__content"], ["alt", "file", "width", "160", "height", "160", 3, "src"], [1, "info"], [1, "image__name"], [1, "image__size"], ["mat-icon-button", "", "aria-label", "delete", "class", "image__delete-btn", 3, "click", 4, "ngIf", "ngIfElse"], ["cancel", ""], [3, "progress", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "delete", 1, "image__delete-btn", 3, "click"], ["mat-icon-button", "", "aria-label", "cancel", 1, "image__cancel-btn", 3, "click"], [3, "progress"]],
  template: function UploadImageCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "fileFormat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, UploadImageCardComponent_button_9_Template, 3, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UploadImageCardComponent_ng_template_10_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UploadImageCardComponent_app_progress_12_Template, 2, 3, "app-progress", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.file.url ? ctx.file.url : "assets/icons/no-file.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.file.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx.file.size), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.file.url)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.file == null ? null : ctx.file.url));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _shared_pipes_file_format_pipe__WEBPACK_IMPORTED_MODULE_1__.FileFormatPipe],
  styles: [".image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 180px;\n  border: solid 1px #677089;\n  border-radius: 12px;\n  padding: 16px;\n  position: relative;\n  margin: 0 0 25px 25px;\n}\n.image__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.image__cancel-btn[_ngcontent-%COMP%], .image__delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1pbWFnZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBREo7QUFJRTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFISiIsImZpbGUiOiJ1cGxvYWQtaW1hZ2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuLmltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAkc2Vjb25kYXJ5LWRhcmstYmx1ZS0yMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMCAyNXB4IDI1cHg7XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAmX19jYW5jZWwtYnRuLFxuICAmX19kZWxldGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbiAgfVxufVxuIl19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 9491:
/*!************************************************************************!*\
  !*** ./src/app/features/admin/product/pipes/get-category-name.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCategoryNamePipe": () => (/* binding */ GetCategoryNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GetCategoryNamePipe {
    transform(id, categories) {
        return categories.find((category) => category.id === id)?.name || 'No category';
    }
}
GetCategoryNamePipe.ɵfac = function GetCategoryNamePipe_Factory(t) { return new (t || GetCategoryNamePipe)(); };
GetCategoryNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getCategoryName", type: GetCategoryNamePipe, pure: true });


/***/ }),

/***/ 1522:
/*!*******************************************************************!*\
  !*** ./src/app/features/admin/product/product-admin.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAdminComponent": () => (/* binding */ ProductAdminComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/decorators/ngrx-selector.decorator */ 9933);
/* harmony import */ var src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/destroyable.directive */ 4004);
/* harmony import */ var src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums/material-icon.enum */ 3521);
/* harmony import */ var src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/enums/more-option-action.enum */ 5628);
/* harmony import */ var src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/store/actions/product.action */ 2296);
/* harmony import */ var src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/store/selectors/category.selectors */ 3507);
/* harmony import */ var src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/store/selectors/product.selectors */ 9497);
/* harmony import */ var src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/constants/messages */ 491);
/* harmony import */ var _components_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-product-form/add-product-form.component */ 7757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/confirm.service */ 545);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_components_more_option_more_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/more-option/more-options.component */ 9963);
/* harmony import */ var _pipes_get_category_name_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/get-category-name.pipe */ 9491);




















function ProductAdminComponent_ng_container_4_div_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function ProductAdminComponent_ng_container_4_div_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r15.name);
  }
}

function ProductAdminComponent_ng_container_4_div_1_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Product Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return [];
};

function ProductAdminComponent_ng_container_4_div_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "getCategoryName");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r16 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, product_r16.categoryId, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, ctx_r8.categories$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](6, _c0)), " ");
  }
}

function ProductAdminComponent_ng_container_4_div_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function ProductAdminComponent_ng_container_4_div_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r17.price);
  }
}

function ProductAdminComponent_ng_container_4_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " More options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function ProductAdminComponent_ng_container_4_div_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 21)(1, "app-more-options", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("update", function ProductAdminComponent_ng_container_4_div_1_td_13_Template_app_more_options_update_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const product_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.updateProduct(product_r18));
    })("delete", function ProductAdminComponent_ng_container_4_div_1_td_13_Template_app_more_options_delete_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const product_r18 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.removeProduct(product_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("moreOptions", ctx_r12.moreOptions);
  }
}

function ProductAdminComponent_ng_container_4_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 23);
  }
}

function ProductAdminComponent_ng_container_4_div_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 24);
  }
}

function ProductAdminComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6)(1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ProductAdminComponent_ng_container_4_div_1_th_3_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ProductAdminComponent_ng_container_4_div_1_td_4_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ProductAdminComponent_ng_container_4_div_1_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ProductAdminComponent_ng_container_4_div_1_td_7_Template, 4, 7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ProductAdminComponent_ng_container_4_div_1_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ProductAdminComponent_ng_container_4_div_1_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](11, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ProductAdminComponent_ng_container_4_div_1_th_12_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ProductAdminComponent_ng_container_4_div_1_td_13_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ProductAdminComponent_ng_container_4_div_1_tr_14_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ProductAdminComponent_ng_container_4_div_1_tr_15_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const products_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", products_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
  }
}

function ProductAdminComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductAdminComponent_ng_container_4_div_1_Template, 16, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const products_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", products_r3.length > 0)("ngIfElse", _r1);
  }
}

function ProductAdminComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Product list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

class ProductAdminComponent extends src_app_core_directives_destroyable_directive__WEBPACK_IMPORTED_MODULE_1__.DestroyableDirective {
  constructor(store, dialog, confirmService) {
    super();
    this.store = store;
    this.dialog = dialog;
    this.confirmService = confirmService;
    this.displayedColumns = ['productName', 'category', 'price', 'options'];
    this.moreOptions = [{
      icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_2__.MatIcon.EDIT,
      text: 'Update product',
      action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_3__.MoreOptionAction.Update
    }, {
      icon: src_app_core_enums_material_icon_enum__WEBPACK_IMPORTED_MODULE_2__.MatIcon.DELETE,
      text: 'Delete product',
      action: src_app_core_enums_more_option_action_enum__WEBPACK_IMPORTED_MODULE_3__.MoreOptionAction.Delete
    }];
  }

  onAddProduct() {
    this.openProductForm();
  }

  removeProduct(product) {
    this.confirmService.confirm(src_app_shared_constants_messages__WEBPACK_IMPORTED_MODULE_7__.DELETE_RECORD_TEXT).subscribe(isConfirmed => {
      if (isConfirmed) {
        this.store.dispatch((0,src_app_core_store_actions_product_action__WEBPACK_IMPORTED_MODULE_4__.removeProduct)({
          productId: product.id,
          photos: product.photo
        }));
      }
    });
  }

  updateProduct(product) {
    this.openProductForm(product);
  }

  openProductForm(product) {
    this.dialog.open(_components_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_8__.AddProductFormComponent, {
      data: product,
      maxWidth: '100vw',
      height: '100%',
      width: '100%'
    });
  }

}

ProductAdminComponent.ɵfac = function ProductAdminComponent_Factory(t) {
  return new (t || ProductAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_confirm_service__WEBPACK_IMPORTED_MODULE_9__.ConfirmService));
};

ProductAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ProductAdminComponent,
  selectors: [["app-product-admin"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 3,
  consts: [[1, "content-wrapper"], [1, "add-product"], ["mat-button", "", 1, "add-product-btn", 3, "click"], [4, "ngIf"], ["noProducts", ""], ["class", "table-wrap", 4, "ngIf", "ngIfElse"], [1, "table-wrap"], ["mat-table", "", "aria-describedby", "product-table", 3, "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "options"], ["mat-header-cell", "", "class", "more-options", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "more-options", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "more-options"], ["mat-cell", "", 1, "more-options"], [3, "moreOptions", "update", "delete"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"]],
  template: function ProductAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductAdminComponent_Template_button_click_2_listener() {
        return ctx.onAddProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Add product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ProductAdminComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ProductAdminComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 1, ctx.products$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _shared_components_more_option_more_options_component__WEBPACK_IMPORTED_MODULE_10__.MoreOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_get_category_name_pipe__WEBPACK_IMPORTED_MODULE_11__.GetCategoryNamePipe],
  styles: [".content-wrapper[_ngcontent-%COMP%]   .add-product[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFBSiIsImZpbGUiOiJwcm9kdWN0LWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlciB7XG4gIC5hZGQtcHJvZHVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG4iXX0= */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_6__.selectProducts)], ProductAdminComponent.prototype, "products$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,src_app_core_decorators_ngrx_selector_decorator__WEBPACK_IMPORTED_MODULE_0__.State)(src_app_core_store_selectors_category_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCategories)], ProductAdminComponent.prototype, "categories$", void 0);

/***/ }),

/***/ 1620:
/*!****************************************************************!*\
  !*** ./src/app/features/admin/product/product-admin.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAdminModule": () => (/* binding */ ProductAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _product_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-admin.component */ 1522);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-product-form/add-product-form.component */ 7757);
/* harmony import */ var _pipes_get_category_name_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/get-category-name.pipe */ 9491);
/* harmony import */ var _components_upload_image_card_upload_image_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upload-image-card/upload-image-card.component */ 8721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);










class ProductAdminModule {
}
ProductAdminModule.ɵfac = function ProductAdminModule_Factory(t) { return new (t || ProductAdminModule)(); };
ProductAdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProductAdminModule });
ProductAdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _product_admin_component__WEBPACK_IMPORTED_MODULE_0__.ProductAdminComponent }])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductAdminModule, { declarations: [_product_admin_component__WEBPACK_IMPORTED_MODULE_0__.ProductAdminComponent,
        _components_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_2__.AddProductFormComponent,
        _pipes_get_category_name_pipe__WEBPACK_IMPORTED_MODULE_3__.GetCategoryNamePipe,
        _components_upload_image_card_upload_image_card_component__WEBPACK_IMPORTED_MODULE_4__.UploadImageCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 8975:
/*!****************************************************!*\
  !*** ./src/app/shared/enums/message-types.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageTypes": () => (/* binding */ MessageTypes)
/* harmony export */ });
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["WARNING"] = "Warning";
    MessageTypes["SUCCESS"] = "Success";
    MessageTypes["ERROR"] = "Error";
    MessageTypes["FORBIDDEN"] = "Forbidden";
})(MessageTypes || (MessageTypes = {}));


/***/ })

}]);
//# sourceMappingURL=src_app_features_admin_product_product-admin_module_ts.cc5aa0b33ec99b1f.js.map