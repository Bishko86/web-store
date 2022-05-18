import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { addCategory, addCategorySuccess } from 'src/app/core/store/actions/category.actions';
import { selectCategoryIsLoading } from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryFormComponent implements OnInit {
  readonly isLoading$: Observable<boolean>;

  private destroy$ = new Subject<boolean>();

  public visible = true;
  public categoryForm: FormGroup;
  
  constructor(private store: Store<IAppState>, private actions: Actions) {
    this.isLoading$ = this.store.pipe(select(selectCategoryIsLoading));
  }

  ngOnInit(): void {
    this.initCategoryForm();
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
