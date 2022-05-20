import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models';
import { removeProduct } from 'src/app/core/store/actions/product.action';
import { IAppState } from 'src/app/core/store/state/app.state';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-product-more-options',
  templateUrl: './product-more-options.component.html',
  styleUrls: ['./product-more-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMoreOptionsComponent {
  @Input() product: Product;

  constructor(private store: Store<IAppState>, private dialog: MatDialog) { }

  updateProduct(): void {
    this.dialog.open(AddProductFormComponent, {data: this.product});
  }

  removeProduct(): void {
    this.store.dispatch(removeProduct({productId: this.product.id!}));
  }
}
