import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable, takeUntil } from 'rxjs';

import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';

import { ConfirmService } from 'src/app/core/services/confirm.service';
import { selectGetUsers } from 'src/app/core/store/selectors/admin.selectors';
import { DELETE_CONFIRM_TEXT } from 'src/app/shared/constants/messages';
import { UserColumnConfig, UserGridOptions } from '../constants';
import { User } from 'src/app/core/models';
import { MoreOptions } from 'src/app/core/models/more-options.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent extends DestroyableDirective {
  public displayedColumns: string[] = UserColumnConfig;
  public moreOptions: MoreOptions[] = UserGridOptions;
  @State(selectGetUsers) public readonly users$: Observable<User[]>;

  constructor(
    private readonly confirmService: ConfirmService
  ) {
    super();
  }

  public openUserProfile(user: User): void {
    //TODO implement this method
    console.error(user);
  }

  public showUpUserCart(cartId: string | undefined): void {
    //TODO implement this method
    console.error(cartId);
  }

  public deleteUser(userId: string): void {
    this.confirmService
      .confirm(DELETE_CONFIRM_TEXT)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          //TODO implement this method
          console.error('Delete User', userId);
        }
      });
  }
}
