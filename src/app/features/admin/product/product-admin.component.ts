import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { MatIcon } from 'src/app/core/enums/material-icon.enum';
import { MoreOptionAction } from 'src/app/core/enums/more-option-action.enum';
import { Category, Product } from 'src/app/core/models';
import { MoreOptions } from 'src/app/core/models/more-options.model';
import { ConfirmService } from 'src/app/core/services/confirm.service';
import { removeProduct } from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { selectProducts } from 'src/app/core/store/selectors/product.selectors';
import { AppState } from 'src/app/core/store/state/app.state';
import { DELETE_RECORD_TEXT } from 'src/app/shared/constants/messages';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAdminComponent extends DestroyableDirective implements OnDestroy {
  public readonly displayedColumns = [
    'productName',
    'category',
    'price',
    'options',
  ];

  public moreOptions: MoreOptions[] = [
    {
      icon: MatIcon.EDIT,
      text: 'Update product',
      action: MoreOptionAction.Update,
    },
    {
      icon: MatIcon.DELETE,
      text: 'Delete product',
      action: MoreOptionAction.Delete,
    },
  ];

  @State(selectProducts) public readonly products$: Observable<Product[]>;
  @State(selectCategories) public readonly categories$: Observable<Category[]>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly dialog: MatDialog,
    private readonly confirmService: ConfirmService
  ) { super() }

  public onAddProduct(): void {
    this.openProductForm();
  }

  public removeProduct(product: Product): void {
    this.confirmService.confirm(DELETE_RECORD_TEXT).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.store.dispatch(
          removeProduct({ productId: product.id!, photos: product.photo })
        );
      }
    });
  }

  public updateProduct(product: Product): void {
    this.openProductForm(product);
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
