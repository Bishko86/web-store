import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-product-more-options',
  templateUrl: './product-more-options.component.html',
  styleUrls: ['./product-more-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMoreOptionsComponent {
  @Input() public product: Product;
  @Output() public removeProduct: EventEmitter<Product> = new EventEmitter<Product>()
  @Output() public updateProduct: EventEmitter<Product> = new EventEmitter<Product>()
}
