import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models';
import {
  addCategory,
  getCategories,
} from 'src/app/core/store/actions/category.actions';
import {
  selectCategories,
  selectCategoryIsLoading,
} from 'src/app/core/store/selectors/category.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin-component.html',
  styleUrls: ['./category-admin-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAdminComponent implements OnInit {
  readonly categories$: Observable<Category[]>;
  readonly isLoading$: Observable<boolean>;

  visible = true;
  categoryForm: FormGroup;

  constructor(
    private store: Store<IAppState>,
    private categoryService: CategoryService
  ) {
    this.isLoading$ = this.store.pipe(select(selectCategoryIsLoading));
    this.categories$ = this.store.pipe(select(selectCategories));
  }

  ngOnInit(): void {
    this.initCategoryForm();
    this.store.dispatch(getCategories());
  }

  private initCategoryForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required),
    });
  }

  submit() {
    this.visible = true;
    const { categoryName } = this.categoryForm.value;
    this.store.dispatch(addCategory({ name: categoryName }));
  }

  remove(id: string | undefined): void {
    if (id) {
      this.categoryService.removeCategory(id);
    }
  }
}
