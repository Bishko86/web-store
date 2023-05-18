import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, filter, takeUntil } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { Product } from 'src/app/core/models';
import { selectProducts } from 'src/app/core/store/selectors/product.selectors';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent extends DestroyableDirective implements OnInit {
  @State(selectProducts) public readonly categoryProducts$: Observable<Product[]>;

  public categoryName: string;

  constructor(private readonly route: ActivatedRoute) {
    super();
  }

  public ngOnInit(): void {
    this.getCategoryName();
  }

  private getCategoryName(): void {
    this.route.params
      .pipe(
        filter(Boolean),
        takeUntil(this.destroy$))
      .subscribe((data) => {
        this.categoryName = data.name;
      });
  }
}
