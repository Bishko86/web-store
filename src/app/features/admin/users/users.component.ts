import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable, takeUntil } from 'rxjs';
import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { MatIcon } from 'src/app/core/enums/material-icon.enum';
import { MoreOptionAction } from 'src/app/core/enums/more-option-action.enum';

import { IUser } from 'src/app/core/models';
import { MoreOptions } from 'src/app/core/models/more-options.model';
import { ConfirmService } from 'src/app/core/services/confirm.service';
import { selectGetUsers } from 'src/app/core/store/selectors/users.selectors';
import { DELETE_CONFIRM_TEXT } from 'src/app/shared/constants/messages';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent extends DestroyableDirective {
  public displayedColumns: string[] = [
    'name',
    'createdAt',
    'email',
    'id',
    'options',
  ];
  public moreOptions: MoreOptions[] = [
    {
      icon: MatIcon.PROFILE,
      text: 'User Profile',
      action: MoreOptionAction.Open,
    },
    {
      icon: MatIcon.ADD_SHOPPING_CART,
      text: 'User orders',
      action: MoreOptionAction.ShowUp,
    },
    {
      icon: MatIcon.DELETE,
      text: 'Delete User',
      action: MoreOptionAction.Delete,
    },
  ];
  @State(selectGetUsers) public readonly users$: Observable<IUser[]>;

  constructor(
    private readonly confirmService: ConfirmService
  ) {
    super();
  }

  public openUserProfile(user: IUser): void {
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
