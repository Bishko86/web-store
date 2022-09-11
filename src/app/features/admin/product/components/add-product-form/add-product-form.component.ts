import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Category, Product } from 'src/app/core/models';
import {
  addProduct,
  ProductActions,
  updateProduct,
} from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { selectProductIsLoading } from 'src/app/core/store/selectors/product.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  readonly accept = 'image/png, image/jpeg';
  readonly isLoading$: Observable<boolean>;

  public productForm: UntypedFormGroup;
  public categories$: Observable<Category[]>;

  constructor(
    private store: Store<IAppState>,
    private dialogRef: MatDialogRef<AddProductFormComponent>,
    private actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.isLoading$ = this.store.pipe(select(selectProductIsLoading));
  }

  get category(): AbstractControl {
    return this.productForm.controls['category'];
  }

  private initProductForm() {
    this.productForm = new UntypedFormGroup({
      name: new UntypedFormControl(this.data?.name, Validators.required),
      price: new UntypedFormControl(this.data?.price, Validators.required),
      categoryId: new UntypedFormControl(this.data?.categoryId, Validators.required),
      description: new UntypedFormControl(this.data?.description, Validators.required),
      photo: new UntypedFormControl(null),
    });
  }

  ngOnInit(): void {
    this.initProductForm();
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  saveProduct(): void {
    const product: Product = {
      ...this.data,
      ...this.productForm.value,
      createdAt: Date.now(),
    };
    if (this.data) {
      this.store.dispatch(updateProduct({ product }));
    } else {
      this.store.dispatch(addProduct({ product }));
    }
    this.actions$
      .pipe(
        ofType(
          ProductActions.UPDATE_PRODUCT_SUCCESS,
          ProductActions.ADD_PRODUCT_SUCCESS),
          takeUntil(this.destroy$)
        ).subscribe(() => this.dialogRef.close());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
