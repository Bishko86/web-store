import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/core/models';
import { removeCategory } from 'src/app/core/store/actions/category.actions';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreOptionsComponent {
@Input() category: Category;
@Output() update = new EventEmitter<Category>()

  constructor(private store: Store<IAppState>) { }

  removeCategory(): void {
    this.store.dispatch(removeCategory({ categoryId: this.category.id! }));
  }

  updateCategory() {
    this.update.emit(this.category);
  }

}
