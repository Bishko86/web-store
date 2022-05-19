import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "src/app/core/models";
import { selectProducts } from "src/app/core/store/selectors/product.selectors";
import { IAppState } from "src/app/core/store/state/app.state";
import { AddProductFormComponent } from "./components/add-product-form/add-product-form.component";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductAdminComponent {
  products$: Observable<Product[]>;
  displayedColumns = ['productName', 'category', 'price', 'options']

  constructor(
    private store: Store<IAppState>,
    private dialog: MatDialog,
    ) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  openProductForm() {
    this.dialog.open(AddProductFormComponent)
  }
}