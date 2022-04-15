import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductAdminComponent {
  products = [1,2,3,4,5];
}