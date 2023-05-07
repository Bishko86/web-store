import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { Category } from 'src/app/core/models';
import { getProductsByCategory } from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {

  @State(selectCategories) public readonly categories$: Observable<Category[]>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  public showCategory(category: Category): void {
    if (category.id) {
      this.store.dispatch(getProductsByCategory({ id: category.id }))
    }
  }
}
