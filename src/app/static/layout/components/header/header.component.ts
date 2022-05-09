import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { logout } from 'src/app/core/store/actions/user.actions';
import { selectUser } from 'src/app/core/store/selectors/user.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { CartService } from 'src/app/features/user/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CartService]
})
export class HeaderComponent implements OnInit {
  public amountCartProducts: number;
  private destroy$ = new Subject();
  readonly user$ = this.store.select(selectUser);


  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.cartService.getCart().pipe(takeUntil(this.destroy$)).subscribe(data => {
      if(data && Array.isArray(data.products)) {
        this.amountCartProducts = data.products.length
        this.cdr.markForCheck();
      }
    });
  }

  showCart() {
    this.router.navigate(['user/cart']);
  }

  signOut() {
    this.store.dispatch(logout());
  }
}
