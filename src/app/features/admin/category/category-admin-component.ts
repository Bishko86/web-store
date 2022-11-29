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
import { MatIcon } from 'src/app/core/enums/material-icon.enum';
import { MoreOptionAction } from 'src/app/core/enums/more-option-action.enum';

import { Category } from 'src/app/core/models';
import { MoreOptions } from 'src/app/core/models/more-options.model';
import { ConfirmService } from 'src/app/core/services/confirm.service';
import {
  removeCategory,
  updateCategory,
  updateCategorySuccess,
} from 'src/app/core/store/actions/category.actions';
import {
  selectCategories,
} from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { DELETE_RECORD_TEXT } from 'src/app/shared/constants/messages';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin-component.html',
  styleUrls: ['./category-admin-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAdminComponent implements OnInit, OnDestroy {
  public readonly categories$: Observable<Category[]>;
  private readonly destroy$ = new Subject<boolean>();

  public editedCategoryId: string | undefined;
  public editMode = false;

  public displayedColumns: string[] = [
    'categoryName',
    'createdAt',
    'categoryId',
    'options',
  ];

  public moreOptions: MoreOptions[] = [
    { icon: MatIcon.EDIT, text: 'Edit Category', action: MoreOptionAction.Update },
    { icon: MatIcon.ADD_SHOPPING_CART, text: 'Add product to', action: MoreOptionAction.Add },
    { icon: MatIcon.DELETE, text: 'Delete Category', action: MoreOptionAction.Delete },
  ]

  constructor(
    private readonly store: Store<IAppState>,
    private readonly actions: Actions,
    private readonly dialog: MatDialog,
    private readonly confirmService: ConfirmService
    ) {
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  public ngOnInit(): void {
    this.isCategoryUpdated();
  }

  private isCategoryUpdated() {
    this.actions
      .pipe(ofType(updateCategorySuccess), takeUntil(this.destroy$))
      .subscribe(() => {
        this.toViewMode();
      });
  }

  public toViewMode(): void {
    this.editMode = false;
    this.editedCategoryId = undefined;
  }

  public editCategory(category: Category): void {
    this.editedCategoryId = category.id;
    this.editMode = true;
  }

  public updateCategory(event: string): void {
    if (this.editedCategoryId) {
      this.store.dispatch(
        updateCategory({
          categoryName: event,
          categoryId: this.editedCategoryId,
        })
      );
    }
  }

  public removeCategory(category: Category): void {
    this.confirmService.confirm(DELETE_RECORD_TEXT).pipe(takeUntil(this.destroy$)).subscribe((isConfirmed) => {
      if(isConfirmed) {
        this.store.dispatch(removeCategory({ categoryId: category.id! }));
      }
    });
  }

  public openCategoryForm() {
    this.dialog.open(AddCategoryFormComponent, {
      height: '300px',
      width: '400px',
   });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
