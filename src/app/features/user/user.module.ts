import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserComponent, CartComponent, OrdersComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserComponent],
})
export class UserModule {}
