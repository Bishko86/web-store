import { AbstractControl } from '@angular/forms';
import { ProductImage } from './product-image.model';

export interface AddProductFormModel {
  name: AbstractControl<string>;
  price: AbstractControl<number>;
  description: AbstractControl<string>;
  photo: AbstractControl<ProductImage[]>;
  categoryId: AbstractControl<string>;
}
