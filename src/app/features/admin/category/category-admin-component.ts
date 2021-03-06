import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Category } from 'src/app/core/models';
import {
  updateCategory,
  updateCategorySuccess,
} from 'src/app/core/store/actions/category.actions';
import {
  selectCategories,
} from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin-component.html',
  styleUrls: ['./category-admin-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAdminComponent implements OnInit, OnDestroy {
  readonly categories$: Observable<Category[]>;
  private destroy$ = new Subject<boolean>();

  public editedCategoryId: string | undefined;
  public editMode = false;

  public displayedColumns: string[] = [
    'categoryName',
    'createdAt',
    'categoryId',
    'options',
  ];

  constructor(
    private store: Store<IAppState>,
    private actions: Actions,
    private dialog: MatDialog,
    ) {
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  ngOnInit(): void {
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

  openCategoryForm() {
    this.dialog.open(AddCategoryFormComponent, {
      height: '300px',
      width: '400px',
   })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
