import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

  public addToCart(product: Product): void {
    console.error(product);
  }

}
