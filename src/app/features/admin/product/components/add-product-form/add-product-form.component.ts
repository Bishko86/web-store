import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store } from '@ngrx/store';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';

import { Category, Product } from 'src/app/core/models';
import { ConfirmService } from 'src/app/core/services/confirm.service';
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
import {
  DELETE_CONFIRM_TEXT,
  TOO_MANY_FILES,
} from 'src/app/shared/constants/messages';
import { MessageTypes } from 'src/app/shared/enums/message-types.enum';
import { AddProductFormModel } from '../../models/add-product-form.model';
import { ProductImage } from '../../models/product-image.model';
import { UploadFile } from '../../models/upload-file.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent extends DestroyableDirective implements OnInit, OnDestroy {
  public readonly accept = 'image/png, image/jpeg';

  private isEditMode: boolean = false;
  public productForm: FormGroup<AddProductFormModel>;
  public files: UploadFile[] = [];

  get photoControl(): AbstractControl<ProductImage[]> {
    return this.productForm.controls['photo'];
  }

  @State(selectProductIsLoading) public readonly isLoading$: Observable<boolean>;
  @State(selectCategories) public categories$: Observable<Category[]>;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly dialogRef: MatDialogRef<AddProductFormComponent>,
    private readonly actions$: Actions,
    private readonly fileUploadService: UploadFileService,
    private readonly cdr: ChangeDetectorRef,
    private readonly snackbarService: SnackBarService,
    private readonly confirmService: ConfirmService,
    @Inject(MAT_DIALOG_DATA) private readonly dialogData: Product
  ) { super() }

  get category(): AbstractControl<string> {
    return this.productForm.controls['categoryId'];
  }

  private initProductForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(this.dialogData?.name || '', Validators.required) as AbstractControl,
      price: new FormControl(this.dialogData?.price || null, Validators.required) as AbstractControl,
      categoryId: new FormControl(this.dialogData?.categoryId || '', Validators.required) as AbstractControl,
      description: new FormControl(this.dialogData?.description || '', Validators.required) as AbstractControl,
      photo: new FormControl<ProductImage[]>(this.dialogData?.photo || []) as AbstractControl,
    });
  }

  public ngOnInit(): void {
    this.initProductForm();
    this.updateFileList();

    if (this.dialogData) {
      this.isEditMode = true;
      this.files = [...this.dialogData.photo];
    }
  }

  public saveProduct(): void {
    const product: Product = {
      ...(this.isEditMode && { id: this.dialogData.id }),
      ...(this.productForm.value as Product),
      createdAt: this.isEditMode ? this.dialogData.createdAt : Date.now(),
    };

    if (this.isEditMode) {
      this.store.dispatch(updateProduct({ product }));
    } else {
      this.store.dispatch(addProduct({ product }));
    }

    this.actions$
      .pipe(
        ofType(
          ProductActions.UPDATE_PRODUCT_SUCCESS,
          ProductActions.ADD_PRODUCT_SUCCESS
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.dialogRef.close());
  }

  public onFileDropped(event: FileList): void {
    this.prepareFilesList(Object.values(event));
  }

  public fileBrowseHandler(event: Event): void {
    const files = Object.values((event.target as HTMLInputElement).files || {});
    this.prepareFilesList(files);
  }

  private prepareFilesList(files: File[]): void {
    if (this.showWarningSnackBar(files.length + this.files.length)) {
      return;
    }

    files.forEach((file) => {
      const angularFireUploadTask = this.uploadFile(file);
      const uploadFile: UploadFile = {
        url: null,
        name: file.name,
        size: file.size,
        progress$: angularFireUploadTask.percentageChanges(),
        cancel: angularFireUploadTask.cancel,
      };

      this.files = this.files.concat(uploadFile);
    });
  }

  private showWarningSnackBar(length: number): boolean {
    if (length > 6) {
      this.snackbarService.openSnackBar(
        TOO_MANY_FILES(6),
        MessageTypes.FORBIDDEN,
        4000
      );
      return true;
    }
    return false;
  }

  private uploadFile(file: File): AngularFireUploadTask {
    return this.fileUploadService.pushFileToStorage(file);
  }

  private updateFileList(): void {
    this.fileUploadService.uploadedFiles$
      .pipe(filter(Boolean), takeUntil(this.destroy$))
      .subscribe((productPhoto: ProductImage) => {
        this.cdr.markForCheck();
        this.photoControl?.setValue([
          productPhoto,
          ...this.photoControl.value,
        ]);

        this.files = this.files.map((file) => {
          if (file.name === productPhoto.name) {
            return { ...file, url: productPhoto.url };
          }
          return file;
        });
      });
  }

  public onDeleteProductPhoto(photoName: string): void {
    this.fileUploadService
      .deleteFile(photoName)
      .pipe(take(1))
      .subscribe({
        next: () => this.deleteProductPhoto(photoName),
        error: () => this.deleteProductPhoto(photoName),
      });
  }

  private deleteProductPhoto(photoName: string): void {
    const productPhotos = this.photoControl
      ?.getRawValue()
      .filter((imag: ProductImage) => imag.name !== photoName);
    this.photoControl?.setValue(productPhotos);
    this.files = productPhotos;
    this.cdr.markForCheck();
  }

  public closeDialog(): void {
    if (this.productForm.dirty) {
      this.confirmService
        .confirm(DELETE_CONFIRM_TEXT)
        .subscribe((isConfirmed) => {
          if (isConfirmed) {
            this.dialogRef.close();
          }
        });
    } else {
      this.dialogRef.close();
    }
  }

  public cancelUploadImage(canceledFile: UploadFile): void {
    canceledFile.cancel && canceledFile.cancel();
    this.files = this.files.filter((file) => file.name !== canceledFile.name);
  }
}
