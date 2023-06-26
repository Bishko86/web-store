import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { addCategory, addCategorySuccess } from 'src/app/core/store/actions/category.actions';
import { selectCategoryIsLoading } from 'src/app/core/store/selectors/category.selectors';
import { AppState } from 'src/app/core/store/state/app.state';
import { CategoryFormModel } from '../../models/category-form.model';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryFormComponent extends DestroyableDirective implements OnInit, OnDestroy {
  @State(selectCategoryIsLoading) public readonly isLoading$: Observable<boolean>;
  public categoryForm: FormGroup<CategoryFormModel>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly actions: Actions,
    private readonly dialogRef: MatDialogRef<AddCategoryFormComponent>,
  ) { super() }

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
}
