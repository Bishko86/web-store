import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-admin-item',
  templateUrl: './product-admin-item.component.html',
  styleUrls: ['./product-admin-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAdminItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
