import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
  ChangeDetectorRef,
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
import { Observable, Subject, take, takeUntil } from 'rxjs';

import { Category, Product } from 'src/app/core/models';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import {
  addProduct,
  ProductActions,
  updateProduct,
} from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { selectProductIsLoading } from 'src/app/core/store/selectors/product.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { TOO_MANY_FILES } from 'src/app/shared/constants/messages';
import { MessageTypes } from 'src/app/shared/enums/message-types.enum';
import { AddProductFormModel } from '../../models/add-product-form.model';
import { ProductImage } from '../../models/product-image.model';

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
  public files: any[] = [];

  get photoControl() {
    return this.productForm.get('photo');
  }

  constructor(
    private readonly store: Store<IAppState>,
    private readonly dialogRef: MatDialogRef<AddProductFormComponent>,
    private readonly actions$: Actions,
    private readonly fileUploadService: UploadFileService,
    private readonly cdr: ChangeDetectorRef,
    private readonly snackbarService: SnackBarService,
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
      price: new FormControl(this.data?.price || null, Validators.required) as AbstractControl,
      categoryId: new FormControl(this.data?.categoryId || '', Validators.required) as AbstractControl,
      description: new FormControl(this.data?.description || '', Validators.required) as AbstractControl,
      photo: new FormControl('') as AbstractControl,
    });
  }

  public ngOnInit(): void {
    this.initProductForm();
    this.categories$ = this.store.pipe(select(selectCategories));
    this.updateFileList();
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

  public onFileDropped(event: FileList): void {
    this.prepareFilesList(Object.values(event));
  }

  public fileBrowseHandler(event: Event): void {
    const files = (event.target as HTMLInputElement).files || {};
    this.prepareFilesList(Object.values(files));
  }

  private prepareFilesList(files: File[]): void {
    if (files.length > 6) {
      return this.snackbarService.openSnackBar(
        TOO_MANY_FILES,
        MessageTypes.FORBIDDEN,
        4000
      );
    }

    for (const file of files) {
      const progress$ = this.uploadFile(file);
      const viewData = {
        name: file.name,
        size: this.formatBytes(file.size),
        progress$,
      };
      this.files.push(viewData);
    }
  }

  private uploadFile(file: File): Observable<number | undefined> {
    return this.fileUploadService.pushFileToStorage(file);
  }

  private updateFileList(): void {
    this.fileUploadService.uploadedFiles$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ProductImage[]) => {
        if (!data.length) return;
        const photoControl = this.productForm.get('photo');
        photoControl?.setValue([...data]);
        this.cdr.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  //TODO move this method to pipe
  public formatBytes(bytes: number, decimals = 0) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public deleteImage(value: ProductImage): void {
    this.fileUploadService
      .deleteFile(value.name)
      .pipe(take(1))
      .subscribe(() => {
        this.cdr.markForCheck();
        const photos = this.photoControl
          ?.getRawValue()
          .filter((img: ProductImage) => img.name !== value.name);
        this.photoControl?.setValue(photos);
        this.files = this.files.filter(
          (file: File) => file.name !== value.name
        );
      });
  }
}
