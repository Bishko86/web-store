import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderItemComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OrderComponent }]),
  ],
})
export class OrderModule {}
