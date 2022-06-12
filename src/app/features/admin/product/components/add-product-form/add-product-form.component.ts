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
import { FileUpload } from 'src/app/core/models/image.model';
import {
  addProduct,
  ProductActions,
  updateProduct,
} from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { selectProductIsLoading } from 'src/app/core/store/selectors/product.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { UploadFileService } from '../../../services/upload-file.service';

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

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;

  public productForm: FormGroup;
  public categories$: Observable<Category[]>;

  constructor(
    private store: Store<IAppState>,
    private dialogRef: MatDialogRef<AddProductFormComponent>,
    private actions$: Actions,
    private uploadFile: UploadFileService,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.isLoading$ = this.store.pipe(select(selectProductIsLoading));
  }

  get category(): AbstractControl {
    return this.productForm.controls['category'];
  }

  get photo() {
    return this.productForm.controls['photo'];
  }

  private initProductForm() {
    this.productForm = new FormGroup({
      name: new FormControl(this.data?.name, Validators.required),
      price: new FormControl(this.data?.price, Validators.required),
      categoryId: new FormControl(this.data?.categoryId, Validators.required),
      description: new FormControl(this.data?.description, Validators.required),
      photo: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.initProductForm();
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    
  }

  upload() {
    if(this.photo.valid){
      const file: File | null = this.photo.value[0];
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadFile.pushFileToStorage(this.currentFileUpload).subscribe((data)  => console.log(data)
        );
      }
    }
    else{
      console.log('no data'); 
    }
    
  }

  saveProduct(): void {
    
    const product: Product = {
      ...this.data,
      ...this.productForm.value,
      photos: [],
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
        ).subscribe(() => {console.log(this.photo); this.dialogRef.close(); });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
