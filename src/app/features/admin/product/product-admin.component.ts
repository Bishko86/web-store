import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Category, Product } from 'src/app/core/models';
import { ConfirmService } from 'src/app/core/services/confirm.service';
import { removeProduct } from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { selectProducts } from 'src/app/core/store/selectors/product.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { DELETE_RECORD_TEXT } from 'src/app/shared/constants/messages';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAdminComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  public readonly products$: Observable<Product[]>;
  public readonly displayedColumns = ['productName', 'category', 'price', 'options'];

  public categories: Category[];

  constructor(
    private readonly store: Store<IAppState>,
    private readonly dialog: MatDialog,
    private readonly confirmService: ConfirmService
    ) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  public ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.store
      .pipe(takeUntil(this.destroy$), select(selectCategories))
      .subscribe((categories) => (this.categories = categories));
  }

  public onAddProduct(): void {
    this.openProductForm();
  }

  public removeProduct(product: Product): void {
    this.confirmService.confirm(DELETE_RECORD_TEXT).subscribe((isConfirmed) => {
      if(isConfirmed) {
        this.store.dispatch(removeProduct({ productId: product.id!, photos: product.photo }));
      }
    })
  }

  public updateProduct(product: Product): void {
    this.openProductForm(product);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private openProductForm(product?: Product): void {
    this.dialog.open(AddProductFormComponent, { 
      data: product,
      maxWidth: '100vw',
      height: '100%',
      width: '100%',
    });
  }
}
