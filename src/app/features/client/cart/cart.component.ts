import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';

import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { selectUserCart } from 'src/app/core/store/selectors/user.selectors';
import { AppState } from 'src/app/core/store/state';
import { getUserCart, removeProductFromCart } from 'src/app/core/store/actions/user.actions';
import { Cart, Product } from 'src/app/core/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent extends DestroyableDirective implements OnInit, OnDestroy {
  @State(selectUserCart) public readonly userCart$: Observable<Cart>;

  public cartProducts: Product[] = [];

  constructor(
    private readonly store: Store<AppState>,
    private readonly cdr: ChangeDetectorRef) { super() }

  public ngOnInit(): void {
    this.store.dispatch(getUserCart());
    this.userCart$.pipe(takeUntil(this.destroy$)).subscribe((data) => {

      if (Array.isArray(data?.products)) {
        this.cartProducts = data.products as Product[];
      }

      this.cdr.markForCheck();
    })
  }

  public removeFromCart(productId: string): void {
    this.store.dispatch(removeProductFromCart({ productId }));
  }
}
