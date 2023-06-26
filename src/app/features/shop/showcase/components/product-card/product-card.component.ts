import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Product } from 'src/app/core/models';
import { addProductToCart } from 'src/app/core/store/actions/user.actions';
import { AppState } from 'src/app/core/store/state';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() public product: Product;

  public iconName = 'white-heart-50.png';

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>,
    ) { }

  public addToCart(product: Product): void {
    this.store.dispatch(addProductToCart({ productId: product.id as string }));
  }

  public reviewProduct(): void {
    console.error(this.product);
    this.router.navigate([`product/${this.product.name}`]);
  }

  public onMouseEnter(): void {
    this.iconName = 'black-heart-50.png';
  }
  public onMouseLeave(): void {
    this.iconName = 'white-heart-50.png';
  }
}
