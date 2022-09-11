import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
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
import { AddProductFormModel } from '../../models/add-product-form.model';

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

  public productForm: FormGroup<AddProductFormModel>;
  public categories$: Observable<Category[]>;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly dialogRef: MatDialogRef<AddProductFormComponent>,
    private readonly actions$: Actions,
    @Inject(MAT_DIALOG_DATA) private readonly data: Product
  ) {
    this.isLoading$ = this.store.pipe(select(selectProductIsLoading));
  }

  get category(): AbstractControl<string> {
    return this.productForm.controls['categoryId'];
  }

  private initProductForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(this.data?.name || '', Validators.required) as AbstractControl,
      price: new FormControl(this.data?.price || 0, Validators.required) as AbstractControl,
      categoryId: new FormControl(this.data?.categoryId || '', Validators.required) as AbstractControl,
      description: new FormControl(this.data?.description || '', Validators.required) as AbstractControl,
      photo: new FormControl('') as AbstractControl,
    });
  }

  public ngOnInit(): void {
    this.initProductForm();
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  public saveProduct(): void {
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

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
