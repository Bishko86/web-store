import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCategories } from 'src/app/core/store/actions/category.actions';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent implements OnInit {
  constructor(private store: Store<IAppState>,) { }

  ngOnInit(): void {
    this.store.dispatch(getCategories());
  }
}
