import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUser } from 'src/app/core/models';
import { selectGetUsers } from 'src/app/core/store/selectors/users.selectors';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'createdAt', 'email', 'id', 'options'];
  public users$: Observable<IUser[]>;

  constructor(private store: Store<IAppState>) {
    this.users$ = this.store.select(selectGetUsers);
  }

  ngOnInit(): void {
  }
}
