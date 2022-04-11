import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/filter/filter.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, CartComponent, FilterComponent, OrdersComponent],
  imports: [CommonModule],
  exports: [UserComponent],
})
export class UserModule {}
