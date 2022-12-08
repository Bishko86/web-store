import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models';

import { logout } from 'src/app/core/store/actions/auth.actions';
import { selectUser, selectUserRole } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { CartService } from 'src/app/features/client/services/cart.service';
import { State } from 'src/app/core/decorators/ngrx-selector.decorator'
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CartService]
})
export class HeaderComponent extends DestroyableDirective implements OnInit, OnDestroy {
  private readonly roles = ['Admin', 'Client'];
  
  public userRole: string
  public amountCartProducts: number;

  @State(selectUser) public readonly user$: Observable<User>;
  @State(selectUserRole) private readonly role$: Observable<UserRole | undefined> = this.store.select(selectUserRole);


  constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>,
    private readonly cartService: CartService,
    private readonly cdr: ChangeDetectorRef
    ) { super() }

  private getUserRole(): void {
    this.role$.pipe(takeUntil(this.destroy$)).subscribe((role) => {
      if(typeof role === 'number') {
      this.userRole = this.roles[role]
      }
    })
  }
  
  public ngOnInit(): void {
    this.cartService.getCart().pipe(take(1)).subscribe(data => {
      if(data && Array.isArray(data.products)) {
        this.amountCartProducts = data.products.length
        this.cdr.markForCheck();
      }
    });
    this.getUserRole();
  }

  public showCart(): void {
    this.router.navigate(['client/cart']);
  }

  public signOut(): void {
    this.store.dispatch(logout());
  }

  public toPersonalCabinet(): void {
    this.router.navigateByUrl(this.userRole.toLowerCase());
  }
}
