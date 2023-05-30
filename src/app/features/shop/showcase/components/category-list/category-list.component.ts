import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, switchMap, tap, takeUntil, filter } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { Category } from 'src/app/core/models';
import { getProductsByCategory } from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selectors';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent extends DestroyableDirective implements OnInit {
  @State(selectCategories) public readonly categories$: Observable<Category[]>;

  private categoryName: string;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribeForRoute();
  }

  public showCategory(category: Category): void {
    if (category.id) {
      this.store.dispatch(getProductsByCategory({ id: category.id }))
      this.router.navigate([`category/${category.name}`], { state: { id: category.id } });
    }
  }

  private subscribeForRoute(): void {
    this.route.children[0]?.params
      .pipe(
        tap((data) => {
          this.categoryName = data.name;
        }),
        switchMap(() => this.categories$),
        filter(Boolean),
        takeUntil(this.destroy$),
      ).subscribe((categories) => {
        const category = categories.find((category) => category.name === this.categoryName);
        if (category) {
          this.showCategory(category);
        }
      });
  }
}
