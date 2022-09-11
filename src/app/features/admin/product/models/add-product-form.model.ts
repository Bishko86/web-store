import { AbstractControl } from "@angular/forms";

export interface AddProductFormModel {
  name: AbstractControl<string>;
  price: AbstractControl<number>;
  description: AbstractControl<string>;
  photo: AbstractControl<string>;
  categoryId: AbstractControl<string>;
}
