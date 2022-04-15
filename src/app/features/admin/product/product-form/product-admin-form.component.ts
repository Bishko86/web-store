import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-admin-form',
  templateUrl: './product-admin-form.component.html',
  styleUrls: ['./product-admin-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAdminFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
