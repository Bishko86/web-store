import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [OrderService, CartService]
})
export class UserModule {}
