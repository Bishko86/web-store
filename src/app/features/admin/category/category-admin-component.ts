import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Category } from 'src/app/core/models';
import {
  addCategory,
  addCategorySuccess,
  removeCategory,
  updateCategory,
  updateCategorySuccess,
} from 'src/app/core/store/actions/category.actions';
import {
  selectCategories,
  selectCategoryIsLoading,
} from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin-component.html',
  styleUrls: ['./category-admin-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAdminComponent implements OnInit, OnDestroy {
  readonly categories$: Observable<Category[]>;
  readonly isLoading$: Observable<boolean>;
  private destroy$ = new Subject<boolean>();

  public editedCategoryId: string | undefined;
  public editMode = false;
  public visible = true;
  public categoryForm: FormGroup;
  public displayedColumns: string[] = [
    'categoryName',
    'createdAt',
    'categoryId',
    'options',
  ];

  constructor(private store: Store<IAppState>, private actions: Actions) {
    this.isLoading$ = this.store.pipe(select(selectCategoryIsLoading));
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  ngOnInit(): void {
    this.initCategoryForm();
    this.isCategoryUpdated();
  }

  private isCategoryUpdated() {
    this.actions
      .pipe(ofType(updateCategorySuccess), takeUntil(this.destroy$))
      .subscribe(() => {
        this.toViewMode();
      });
  }

  toViewMode(): void {
    this.editMode = false;
    this.editedCategoryId = undefined;
  }

  editCategory(category: Category): void {
    this.editedCategoryId = category.id;
    this.editMode = true;
  }

  updateCategory(event: string): void {
    if (this.editedCategoryId) {
      this.store.dispatch(
        updateCategory({
          categoryName: event,
          categoryId: this.editedCategoryId,
        })
      );
    }
  }

  private initCategoryForm(): void {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required),
    });
  }

  addCategory(): void {
    const { categoryName } = this.categoryForm.value;
    this.store.dispatch(addCategory({ name: categoryName }));
    this.actions
      .pipe(ofType(addCategorySuccess), takeUntil(this.destroy$))
      .subscribe(() => {
        this.categoryForm.reset();
        this.visible = true;
      });
  }

  removeCategory(categoryId: string): void {
    this.store.dispatch(removeCategory({ categoryId }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
