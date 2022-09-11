import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { addCategory, addCategorySuccess } from 'src/app/core/store/actions/category.actions';
import { selectCategoryIsLoading } from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { CategoryFormModel } from '../../models/category-form.model';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryFormComponent implements OnInit {
  public readonly isLoading$: Observable<boolean>;
  private destroy$ = new Subject<boolean>();
  public categoryForm: FormGroup<CategoryFormModel>;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly actions: Actions,
    private readonly dialogRef: MatDialogRef<AddCategoryFormComponent>,
  ) {
    this.isLoading$ = this.store.pipe(select(selectCategoryIsLoading));
  }

  public ngOnInit(): void {
    this.initCategoryForm();
  }

  private initCategoryForm(): void {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required) as AbstractControl,
    });
  }

  public addCategory(): void {
    const { categoryName } = this.categoryForm.getRawValue();
    this.store.dispatch(addCategory({ name: categoryName }));
    this.actions
      .pipe(ofType(addCategorySuccess), takeUntil(this.destroy$))
      .subscribe(() => {
        this.categoryForm.reset();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
