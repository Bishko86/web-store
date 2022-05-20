import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { select, Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";
import { Category, Product } from "src/app/core/models";
import { selectCategories } from "src/app/core/store/selectors/category.selectors";
import { selectProducts } from "src/app/core/store/selectors/product.selectors";
import { IAppState } from "src/app/core/store/state/app.state";
import { AddProductFormComponent } from "./components/add-product-form/add-product-form.component";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductAdminComponent implements OnInit, OnDestroy{
  private destroy$ =  new Subject<boolean>();

  public products$: Observable<Product[]>;
  public categories: Category[];
  public displayedColumns = ['productName', 'category', 'price', 'options']

  constructor(
    private store: Store<IAppState>,
    private dialog: MatDialog,
    ) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.store.pipe(takeUntil(this.destroy$),select(selectCategories)).subscribe((categories) => this.categories = categories)
  }

  openProductForm(): void {
    this.dialog.open(AddProductFormComponent, {
      height: '100%',
      width: '100%',
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
