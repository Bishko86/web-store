import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent extends DestroyableDirective implements OnInit, OnDestroy {
  public products: string[];

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef) { super() }
  
  public ngOnInit(): void {
      this.cartService.getCart().pipe(takeUntil(this.destroy$)).subscribe(data => {
        if(data && Array.isArray(data.products)) {
          this.products = data.products
          this.cdr.markForCheck();
        }
      });
  }
  
  public addToCart(): void {
    this.cartService.addToCart(Date.now().toString());
  }

  public removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }
}
