import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public products: string[];

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef) { }
  
  ngOnInit(): void {
      this.cartService.getCart().pipe(takeUntil(this.destroy$)).subscribe(data => {
        if(data && Array.isArray(data.products)) {
          this.products = data.products
          this.cdr.markForCheck();
        }
      });
  }
  
  addToCart(): void {
    this.cartService.addToCart(Date.now().toString());
  }

  removeFromCart(id: string): void {
    this.cartService.removeFromCart(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
