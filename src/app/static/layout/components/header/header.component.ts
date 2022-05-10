import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { logout } from 'src/app/core/store/actions/auth.actions';
import { selectUser, selectUserRole } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { CartService } from 'src/app/features/client/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CartService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly roles = ['Admin', 'Client'];
  public userRole: string
  public amountCartProducts: number;
  private destroy$ = new Subject();
  readonly user$ = this.store.select(selectUser);
  readonly role$ = this.store.select(selectUserRole);


  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getUserRole() {
    this.role$.pipe(takeUntil(this.destroy$)).subscribe((role) => {
      if(typeof role === 'number') {
      this.userRole = this.roles[role]
      }
      
    })
  }
  
  ngOnInit(): void {
    this.cartService.getCart().pipe(takeUntil(this.destroy$)).subscribe(data => {
      if(data && Array.isArray(data.products)) {
        this.amountCartProducts = data.products.length
        this.cdr.markForCheck();
      }
    });

    this.getUserRole()
  }

  showCart() {
    this.router.navigate(['client/cart']);
  }

  signOut() {
    this.store.dispatch(logout());
  }

  toPersonalCabinet() {
    this.router.navigateByUrl(this.userRole.toLowerCase());
  }
}
