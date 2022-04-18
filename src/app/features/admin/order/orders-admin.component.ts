import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersAdminComponent {}
