import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrdersAdminComponent } from './orders-admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderItemComponent, OrdersAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OrdersAdminComponent }]),
  ],
})
export class OrdersAdminModule {}
